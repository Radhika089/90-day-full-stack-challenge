import api from "./api";

export const getProducts = async (search = "") => {
  const response = await api.get("/product", { params: { search } });

  return response.data;
};

export const getSingleProduct = async (id) => {
  const response = await api.get(`/product/${id}`);

  return response.data;
};
