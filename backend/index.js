import express from "express";
import dotenv from "dotenv";
import connectedDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config(); // ✅ Load .env variables

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // ✅ Optional: parses JSON request bodies

app.use("/api/auth", authRouter);

app.listen(port, () => {
  connectedDb();
  console.log(`Server started on port ${port}`);
});
