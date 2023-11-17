import { Request, Response } from "express";
import { axiosInstance } from "@utils";

// THIS CONTROLLER IS NOT COMPLETE AT THIS MOMENT, THERE IS MORE TO BE DONE HERE!!!
export const initPayment = async (request: Request, response: Response) => {
  try {
    const { data: { data }} = await axiosInstance.post("/transaction/initialize", {
      firstName: "Max",
      lastName: "roland",
      email: "roland@gmail.com",
      phoneNumber: "90909090909",
      amount: 10000,
      currency: "NGN",
    });

    console.log(data);

    response.status(200).json({
      message: "Success",
      data: {
        paymentUrl: data.authorization_url,
      },
    });

  } catch (error) {
    response.status(500).json({ message: "Failed to initialize payment" })
    console.log(error);
  }
};
