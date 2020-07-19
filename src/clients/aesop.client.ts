import axios from "axios";
import { ProductsResponse } from "./response.types";

const baseUrl = "//localhost:3000";

export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await axios.get(`${baseUrl}/nav/shop`);
  return response.data;
};
