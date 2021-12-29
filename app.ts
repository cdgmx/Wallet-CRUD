import express, { Request, Response } from "express";
import dotenv from "dotenv";
import WalletRoutes from "./routes/WalletRoutes";
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
dotenv.config();
connectDB();

app.use("/api/wallet", WalletRoutes);
app.get("/", (req, res: Response) => {
  res.send("Hello World!");
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${PORT}`);
});
