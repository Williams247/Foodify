import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserModel } from "@models";

export const login = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      response.status(404).json({
        success: false,
        status: 404,
        message: "Invalid email or password",
      });
      return;
    }

    const userPassword = await bcrypt.compare(
      password,
      user.password as string
    );

    if (!userPassword) {
      response.status(404).json({
        success: false,
        status: 404,
        message: "Invalid email or password",
      });
      return;
    }

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    const token = await jwt.sign(payload, process.env.SECRET as string, {
      expiresIn: 3600 * 24,
    });

    response.status(200).json({
      success: true,
      status: 200,
      message: "Login successful",
      data: { token: `Bearer ${token}` },
    });
  } catch (error) {
    response
      .status(500)
      .json({ success: false, status: 500, message: "Failed to login" });
    console.log(error);
  }
};
