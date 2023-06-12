import { FetchProps, FetchByIdProps, error404 } from "@utils";

export const fetchAll = async ({
  model,
  page,
  limit,
  searchParams,
  populate,
}: FetchProps) => {
  try {
    const pageReq = Number(page);
    const limitReq = Number(limit);

    const pageValue = pageReq > 1 || !pageReq ? 1 : pageReq;
    const limitValue = !limitReq ? 5 : limitReq;

    const responseData = await model
      .find({ ...searchParams })
      .skip((pageValue - 1) * pageValue)
      .limit(limitValue)
      .populate(populate ?? "")
      .select("-password");

    const count = await model.count();

    if (!responseData) {
      return {
        status: 404,
        message: error404,
        data: null,
      };
    }

    return {
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
      status: 404,
      message: error404,
      data: null,
    };
  }

  return {
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
        status: 404,
        message: error404,
        data: null,
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
