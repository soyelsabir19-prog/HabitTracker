import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.status(403).send("Unauthorized");
  }

  const filePath = path.join(process.cwd(), "private/product.pdf");

  try {
    const file = fs.readFileSync(filePath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=product.pdf");
    return res.status(200).send(file);
  } catch (err) {
    return res.status(500).send("File not found");
  }
}
