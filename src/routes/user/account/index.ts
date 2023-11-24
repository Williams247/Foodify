import express from "express";
import { auth } from "@middlewares";
import { fetchAccount } from "@controllers";

const router = express.Router();

router.get("/user", auth({ forAllUsers: true }), fetchAccount);

export const profileRoutes = { router };
