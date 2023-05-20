import express from "express";
import { auth } from "@middlewares";
import { profile } from "@controllers";
import { UserTypeEnum } from "@utils";

const router = express.Router();

router.get("/user", auth({ userType: UserTypeEnum.User }), profile);

export const profileRoutes = { router };
