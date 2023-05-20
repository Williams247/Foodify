import { SumProps } from "../types/common";

export const sumTotal = (items: SumProps[]) => {
  return items.reduce(
    (accumulator, { product: { price } }) => accumulator + price,
    0
  );
};
