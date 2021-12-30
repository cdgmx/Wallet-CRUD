import express, { Request, Response } from "express";
import dotenv from "dotenv";
import WalletRoutes from "./routes/WalletRoutes";
import Web3Middleware from "./middlewares/Web3MiddleWare";
import ApiErrorHandler from "./error/ApiErrorHandler";
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
dotenv.config();
connectDB();

app.use(Web3Middleware)
app.use("/api/wallet", WalletRoutes);
app.get("/", (req:Request, res: Response) => {
  res.send("Hello World!");
});
app.use(ApiErrorHandler);
const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${PORT}`);
});
