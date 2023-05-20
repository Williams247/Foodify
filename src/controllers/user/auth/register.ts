import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { UserModel } from "@models";
import { UserTypeEnum, UserProps } from "@utils";

export const register = async (request: Request, response: Response) => {
  try {
    const { email, username, password, role } = request.body;

    if (role === UserTypeEnum.Admin) {
      const isAdmin = await UserModel.find({ role }).count();
      if (isAdmin > 0) {
        response.status(409).json({ message: "An admin is already registered" })
        return
      }
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      response.status(409).json({ message: `${email} is already taken.` });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = new UserModel<UserProps>({
      email,
      username,
      password: hashedPassword,
      role,
      verified: UserTypeEnum.Admin === role ? true : false
    });

    await createUser.save();

    response.status(201).json({ message: "Account created." });
  } catch (error) {
    response.status(500).json({ message: "Failed to register user." });
    console.log(error);
  }
};
