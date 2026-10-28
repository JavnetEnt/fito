import express from "express";
import cors from "cors";
import path from "node:path";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { products } from "./products.js";


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, brand: "FITO", time: new Date().toISOString() });
});

// All products
app.get("/api/products", (_req, res) => {
  res.json(products);
});

// One product by id
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

if (process.env.NODE_ENV === "production") {
  const dist = path.join(__dirname, "../client/dist");
if (existsSync(dist)) {
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
}
}
app.listen(PORT, () => console.log(`FITO server running on http://localhost:${PORT}`));
