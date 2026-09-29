import api from "./api";

export const getProducts = async () => {
  const response = await api.get("/product");

  return response.data;
};

export const getSingleProduct = async (id) => {
  const response = await api.get(`/product/${id}`);

  return response.data;
};
