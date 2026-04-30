import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

const Lead = mongoose.models.Lead || mongoose.model("Lead", leadSchema);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "portfolio-api" });
});

app.post("/api/leads", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }

  const lead = await Lead.create({ name, email, message });
  return res.status(201).json({ id: lead._id });
});

async function start() {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI is not set. API health route will work, but database writes will fail.");
  } else {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  app.listen(port, () => {
    console.log(`Portfolio API listening on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
