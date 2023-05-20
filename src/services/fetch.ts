import { FetchProps, FetchByIdProps } from "@utils";

export const fetchAll = async ({ model, page, limit }: FetchProps) => {
  try {
    const pageReq = Number(page);
    const limitReq = Number(limit);

    const pageValue = pageReq > 1 ? 1 : pageReq;

    const responseData = await model
      .find()
      .skip((pageValue - 1) * pageValue)
      .limit(limitReq);

    const count = await model.count();

    return {
      totalItems: count,
      currentPage: pageValue,
      pages: Math.ceil(count / limitReq),
      results: responseData,
    };
  } catch (error) {
    throw error;
  }
};

export const fetchById = async ({ model, id }: FetchByIdProps) => {
  try {
    const data = await model.findById(id).select("-password");
    if (!data) {
      return {
        status: 404,
        message: "Resource not found",
      };
    }

    return {
      status: 200,
      message: "Success",
      data,
    };
  } catch (error) {
    throw error;
  }
};
