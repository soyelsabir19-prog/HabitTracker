import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Main API working" });
});

export default function handler(req, res) {
  return app(req, res);
}
