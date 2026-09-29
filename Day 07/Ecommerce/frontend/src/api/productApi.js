import api from "./api";

export default getProducts = async () => {
  const response = await api.get("/products");

  return response.data;
};
