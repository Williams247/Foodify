import express from "express";
import {
  fetchAllCategories,
  fetchCategoryById,
  createCategory,
  updateCategoryById,
} from "@controllers";
import { validateCreateUpdateCategory, validateId } from "@middlewares";

const router = express.Router();

router.get("/fetch-categories", fetchAllCategories);
router.get("/fetch-category/:id", validateId, fetchCategoryById);
router.post("/create-category", validateCreateUpdateCategory, createCategory);
router.put(
  "/update-category/:id",
  validateId,
  validateCreateUpdateCategory,
  updateCategoryById
);

export const categoryRoutes = { router };
