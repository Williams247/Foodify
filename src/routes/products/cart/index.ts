import express from "express";
import { addToCart, fetchCarts } from "@controllers";
import { validateId, auth } from "@middlewares";

const router = express.Router();

router.get("/fetch-carts", auth({ forAllUsers: true }), fetchCarts);

router.post(
  "/add-to-cart/:id",
  auth({ forAllUsers: true }),
  validateId,
  addToCart
);

export const cartRoutes = { router };
