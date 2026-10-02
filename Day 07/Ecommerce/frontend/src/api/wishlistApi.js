import api from "./api";

export const addToWishlist = async (productId) => {
  const response = await api.post("/wishlist", { productId });
  return response.data;
};

export const getWishlist = async () => {
  const response = await api.get("/wishlist");
  return response.data;
};

export const removeFromWishlist = async (productId) => {
  const response = await api.delete("/wishlist/product", { data: productId });

  return response.data;
};

export const clearWishlist = async () => {
  const response = await api.delete("/wishlist");

  return response.data;
};
