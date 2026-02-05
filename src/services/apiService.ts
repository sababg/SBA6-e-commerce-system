import type { Data } from "../models/types.js";
import { NetworkError } from "../utils/errorHandler.js";

export const getProduct = async (): Promise<Data[]> => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=10&skip=0",
    );
    if (!response.ok) {
      throw new NetworkError("Network response was not ok");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new NetworkError("Fetch error:");
  }
};

getProduct();
