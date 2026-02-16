import PDFDocument from "pdfkit";

export default async function handler(req, res) {
  const { id, name, email, amount, orderId } = req.query;

  if (!id) {
    return res.status(404).send("Receipt not found");
  }

  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=receipt-${id}.pdf`
  );

  doc.pipe(res);

  doc.fontSize(22).text("Payment Receipt", { align: "center" });
  doc.moveDown();

  doc.fontSize(12).text(`Receipt ID: ${id}`);
  doc.text(`Order ID: ${orderId}`);
  doc.text(`Name: ${name}`);
  doc.text(`Email: ${email}`);
  doc.text(`Amount Paid: ₹${amount}`);
  doc.text(`Date: ${new Date().toLocaleString()}`);

  doc.moveDown();
  doc.text("Thank you for your purchase!", { align: "center" });

  doc.end();
}
