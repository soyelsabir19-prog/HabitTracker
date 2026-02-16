import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "private/product.pdf");

  const file = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=product.pdf"
  );

  res.send(file);
}
