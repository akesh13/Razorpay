import express from "express";
const router = express.Router();
import {
  checkout,
  paymentVerification,
} from "../controller/paymentController.js";

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;
