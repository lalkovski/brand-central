import api from "integrations/api";

const GET_CATEGORIES_ENDPOINT = "/categories";
const GET_STATES_ENDPOINT = "/states";

export const getCategories = async () => {
  return (await api()).get(GET_CATEGORIES_ENDPOINT);
};

export const getStates = async () => {
  return (await api()).get(GET_STATES_ENDPOINT);
};
