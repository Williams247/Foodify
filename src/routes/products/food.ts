import express from "express";
import {
  createFood,
  fetchFoodById,
  fetchFoods,
  updateFood,
  deleteFood,
  rateFood,
} from "@controllers";
import { validateFood, validateId, validateFoodRating, auth } from "@middlewares";

const router = express.Router();

router.get("/fetch-food/:id", validateId, fetchFoodById);
router.get("/fetch-foods/:id", validateId, fetchFoods);
router.post("/create-food/:id", validateId, validateFood, createFood);
router.put("/update-food/:id", validateId, validateFood, updateFood);
router.patch("/rate-food/:id", auth({ forAllUsers: true }), validateId, validateFoodRating, rateFood);
router.delete("/delete-food/:id", validateId, deleteFood);

export const foodRoutes = { router };
