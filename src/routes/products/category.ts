import express from "express";
import {
  fetchAllCategories,
  fetchCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategory,
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

router.delete("/delete-category/:id", validateId, deleteCategory);

export const categoryRoutes = { router };
