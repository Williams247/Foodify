import express from "express";
import {
  createFood,
  fetchFoodById,
  fetchFoods,
  updateFood,
  deleteFood,
} from "@controllers";
import { validateFood, validateId } from "@middlewares";

const router = express.Router();

router.get("/fetch-food/:id", validateId, fetchFoodById);
router.get("/fetch-foods/:id", fetchFoods);
router.post("/create-food/:id", validateId, validateFood, createFood);
router.put("/update-food/:id", validateId, validateFood, updateFood);
router.delete("/delete-food/:id", validateId, deleteFood);

export const foodRoutes = { router };
