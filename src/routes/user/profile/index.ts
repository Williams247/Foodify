import express from "express";
import { auth } from "@middlewares";
import { profile } from "@controllers";

const router = express.Router();

router.get("/user", auth({ forAllUsers: true }), profile);

export const profileRoutes = { router };
