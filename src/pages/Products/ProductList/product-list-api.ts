import api from "integrations/api";

const GET_PRODUCTS_ENDPOINT = "/products";

export const getProducts = async () => {
  return (await api()).get(GET_PRODUCTS_ENDPOINT);
};
