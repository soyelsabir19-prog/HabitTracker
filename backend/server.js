const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Temporary purchase storage
const purchases = {};

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* ==============================
   1️⃣ CREATE ORDER
============================== */
app.post("/create-order", async (req, res) => {
  try {
    const { amount, user } = req.body;

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
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    if (expectedSignature === razorpay_signature) {
  const token = crypto.randomBytes(20).toString("hex");

  purchases[token] = {
    paymentId: razorpay_payment_id,
    createdAt: Date.now(),
  };

  // Send the token to frontend
  res.json({
    status: "success",
    token,           // this is now the download token
    receiptId: razorpay_payment_id
  });
} else {
  res.status(400).json({ status: "failure" });
}

  } catch (err) {
    console.error("Error in /verify-payment:", err);
    return res.status(500).json({ error: err.message });
  }
});



/* ==============================
   3️⃣ SECURE DOWNLOAD
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

  // ✅ Do NOT delete token here
  res.download(__dirname + "/private/product.pdf");
});



/* ==============================
   downdload recipt
============================== */
app.get("/download-receipt", (req, res) => {
  const id = req.query.id;

  // You can later generate dynamic receipt PDF here
  // For now send static file

  res.download("receipts/sample-receipt.pdf");
});


/* ==============================
   START SERVER
============================== */
app.listen(process.env.PORT, () => {
  console.log("Backend running on port 5000");
});

