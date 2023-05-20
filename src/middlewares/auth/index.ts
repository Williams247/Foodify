import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
import { UserTypeEnum, UserProps } from "@utils";

interface Props {
  userType?: UserTypeEnum;
  forAllUsers?: boolean;
}

export const auth =
  ({ userType, forAllUsers }: Props) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      let token = request.headers["authorization"];
      if (!token) {
        response.status(401).json({ message: "Unauthorized" });
        return;
      }

      if (!token.startsWith("Bearer ")) {
        response
          .status(401)
          .json({ message: "Token must have a bearer prefix" });
        return;
      }

      token = token.slice(7, token.length);
      const authorized = (await JWT.verify(
        token,
        process.env.SECRET as string
      )) as UserProps;

      if (forAllUsers) {
        request.user = authorized;
        next();
        return;
      }

      if (authorized.role !== userType) {
        return response.status(401).json({ message: "Unauthorized" });
      }

      request.user = authorized;
      next();
    } catch (error) {
      response.status(500).json({ message: error });
      console.log(error);
    }
  };
