import express from "express";
import { initPayment } from "@controllers";

const router = express.Router();

router.post("/init-payment", initPayment);

export const paymentRoute = { router };
