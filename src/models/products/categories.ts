import mongoose from "mongoose";
import { CategoryProps } from "@utils"

const CategorySchema = mongoose.Schema;

const category = new CategorySchema<CategoryProps>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: String
});

export const CategoryModel = mongoose.model("category", category);
