import express, { urlencoded } from "express";
export const app = express();
import { config } from "dotenv";
config({ path: "./config/config.env" });
import cors from "cors";
import paymentRoute from "./Routes/paymentRoute.js";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getKey", (req, res) => {
    res.status(200).json({key: process.env.RAZORPAY_API_KEY})
})