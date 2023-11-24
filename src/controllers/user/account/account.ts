import { Request, Response } from "express";
import { UserModel } from "@models";
import { fetchById, fetchAll } from "@services";

export const fetchAccount = async (request: Request, response: Response) => {
  try {
    const id = request.user.id;
    const { status, message, data } = await fetchById({ model: UserModel, id });
    response.status(status).json({ status, message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed to get account" });
    console.log(error);
  }
};

export const fetchAllAccount = async (request: Request, response: Response) => {
  try {
    const {
      query: { page, limit },
    } = request;

    const { status, message, data } = await fetchAll({
      model: UserModel,
      page,
      limit,
    });
    
    response.status(status).json({ status, message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed to fetch all accounts" });
    console.log(error);
  }
};

export const accountStatusPermission = async (
  request: Request,
  response: Response
) => {
  try {
    const {
      query: { id },
      body: { accountStatus },
    } = request;

    const { status, message, data } = await fetchById({ model: UserModel, id });
    if (status !== 200) {
      response.status(status).json({ status, message, data });
      return;
    }

    const account = await UserModel.findByIdAndUpdate(id);
    if (account) {
      account.blocked = accountStatus === "block" ? true : false;
      await account.save();
      response.status(200).json({ status: 200, message: "Account blocked" });
    }
  } catch (error) {
    response.status(500).json({ message: "Failed to block account" });
    console.log(error);
  }
};
