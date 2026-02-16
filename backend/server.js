const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const crypto = require("crypto");
const PDFDocument = require("pdfkit");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* ==============================
   Temporary Storage (Memory)
============================== */

// token → product access
const purchases = {};

// paymentId → receipt details
const payments = {};

/* ==============================
   Razorpay Instance
============================== */
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* ==============================
   1️⃣ CREATE ORDER
============================== */
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ==============================
   2️⃣ VERIFY PAYMENT
============================== */
app.post("/verify-payment", (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    name,
    email,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // Generate secure download token
    const token = crypto.randomBytes(20).toString("hex");

    // Store product access token
    purchases[token] = {
      paymentId: razorpay_payment_id,
      createdAt: Date.now(),
    };

    // Store receipt details
    payments[razorpay_payment_id] = {
      name: name || "Customer",
      email: email || "N/A",
      amount: 149,
      orderId: razorpay_order_id,
      date: new Date(),
    };

    return res.json({
      status: "success",
      token: token,
      receiptId: razorpay_payment_id,
    });
  } else {
    return res.status(400).json({ status: "failure" });
  }
});

/* ==============================
   3️⃣ SECURE PRODUCT DOWNLOAD
============================== */
app.get("/download-product", (req, res) => {
  const token = req.query.token;

  if (!token || !purchases[token]) {
    return res.status(403).send("Unauthorized");
  }

  const TEN_MINUTES = 10 * 60 * 1000;

  if (Date.now() - purchases[token].createdAt > TEN_MINUTES) {
    delete purchases[token];
    return res.status(403).send("Token expired");
  }

  
  res.download(__dirname + "/private/product.pdf");
});

/* ==============================
   4️⃣ DYNAMIC RECEIPT DOWNLOAD
============================== */
app.get("/download-receipt", (req, res) => {
  const id = req.query.id;

  if (!id || !payments[id]) {
    return res.status(404).send("Receipt not found");
  }

  const payment = payments[id];

  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=receipt-${id}.pdf`
  );

  doc.pipe(res);

  // Receipt Content
  doc.fontSize(22).text("Payment Receipt", { align: "center" });
  doc.moveDown();

  doc.fontSize(12).text(`Receipt ID: ${id}`);
  doc.text(`Order ID: ${payment.orderId}`);
  doc.text(`Name: ${payment.name}`);
  doc.text(`Email: ${payment.email}`);
  doc.text(`Amount Paid: ₹${payment.amount}`);
  doc.text(`Date: ${payment.date.toLocaleString()}`);

  doc.moveDown();
  doc.text("Thank you for your purchase!", { align: "center" });

  doc.end();
});

/* ==============================
   START SERVER
============================== */
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend running on port 5000");
});
