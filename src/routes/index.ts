import express, { Application } from "express";
import { authRoutes, profileRoutes } from "./user";
import { categoryRoutes, foodRoutes, cartRoutes } from "./products";
import { paymentRoute } from "./payment";

const appRouter: Application = express();

appRouter.use("/auth", authRoutes.router);
appRouter.use("/profile", profileRoutes.router);
appRouter.use("/category", categoryRoutes.router);
appRouter.use("/food", foodRoutes.router);
appRouter.use("/food/cart", cartRoutes.router);
appRouter.use("/payment", paymentRoute.router);

export default appRouter;
