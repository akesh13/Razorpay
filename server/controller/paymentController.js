import { instance } from "../server.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100), // amt in smallest currency
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    res.status(200).json({ order });
  } catch (err) {
    res.json(err);
  }
};
export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // save to db

    res.redirect(
      `http://localhost:3000/paymentsuccess?referenc=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({ success: false });
  }
};
