import mongoose from "mongoose";
import { CartProps } from "@utils";

const Schema = mongoose.Schema;

const cart = new Schema<CartProps>({
  product: {
    type: Schema.Types.ObjectId,
    ref: "food",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export const CartModel = mongoose.model("cart", cart);
