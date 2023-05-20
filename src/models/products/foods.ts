import mongoose from "mongoose";
import { FoodsProps } from "@utils"

const FoodSchema = mongoose.Schema;

const food = new FoodSchema<FoodsProps>({
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "category",
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
});

export const FoodModel = mongoose.model("food", food);
