import api from "integrations/api";

const GET_PRODUCTS_ENDPOINT = "/products";

export const getProduct = async (id: number) => {
  return (await api()).get(`${GET_PRODUCTS_ENDPOINT}/${id}`);
};
