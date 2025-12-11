import data from "./data.json";

export const actualData = data.map((item) => {
  return {
    ...item,
    quantity: 1,
  };
});
