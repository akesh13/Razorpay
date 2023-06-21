import { app } from "./app.js";
const PORT = process.env.PORT;
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(PORT, () => console.log(`serer in running in ${PORT}`));
