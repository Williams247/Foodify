import { FetchProps, FetchByIdProps, error404 } from "@utils";

export const fetchAll = async ({
  model,
  page,
  limit,
  searchParams,
  populate,
}: FetchProps) => {
  try {
    const pageReq = Number(page ?? 1);
    const limitReq = Number(limit ?? 5);

    const pageValue = pageReq === 0 ? 1 : pageReq;
    const limitValue = limitReq === 0 ? 5 : limitReq;

    const responseData = await model
      .find({ ...searchParams })
      .skip((pageValue - 1) * limitValue)
      .limit(limitValue)
      .populate(populate ?? "")
      .select("-password");

    const count = await model.count();

    if (!responseData) {
      return {
        success: false,
        status: 404,
        message: error404,
        data: null,
      };
    }

    return {
      success: true,
      status: 200,
      message: "Success",
      data: {
        totalItems: count,
        currentPage: pageValue,
        pages: Math.ceil(count / limitValue),
        results: responseData,
      },
    };
  } catch (error) {
    throw error;
  }
};

export const fetchAllWithoutPaginate = async ({
  model,
  searchParams,
  populate,
}: FetchProps) => {
  const responseData = await model
    .find({ ...searchParams })
    .populate(populate ?? "")
    .select("-password");

  if (!responseData) {
    return {
      success: false,
      status: 404,
      message: error404,
      data: null,
    };
  }

  return {
    success: true,
    status: 200,
    message: "Success",
    data: {
      results: responseData,
    },
  };
};

export const fetchById = async ({ model, id }: FetchByIdProps) => {
  try {
    const data = await model.findById(id).select("-password");
    if (!data) {
      return {
        success: false,
        status: 404,
        message: error404,
        data: null,
      };
    }

    return {
      success: true,
      status: 200,
      message: "Success",
      data,
    };
  } catch (error) {
    throw error;
  }
};
