import express, { Application } from "express";
import { authRoutes, profileRoutes } from "./user";
import { categoryRoutes, foodRoutes } from "./products";

const appRouter: Application = express();

appRouter.use("/auth", authRoutes.router);
appRouter.use("/profile", profileRoutes.router);
appRouter.use("/category", categoryRoutes.router);
appRouter.use("/food", foodRoutes.router);

export default appRouter;
