import api from "./axios";

// Get all products
export async function getProducts(params) {
  return api.get(`/product/getProduct`, { params });
}

//Single product
export async function getProductById(id) {
  return api.get(`/product/getSingleProduct/${id}`);
}

// Get products by category
export async function getProductsByCategory(category) {
  return api.get(`product/getCategory/${category}`);
}

// Get low-stock products
export const getLowStockProducts = () => {
  return api.get("/product/getLowProduct");
};

// Get out-of-stock products
export const getOutOfStockProducts = () => {
  return api.get("/product/out-of-stock");
};

// Update product
export async function updateProduct(id, data) {
  return api.patch(`product/update/${id}`, data);
}

// Delete product
export async function deleteProduct(id) {
  return api.delete(`product/delete/${id}`);
}

// Create Product
export async function createProduct(data) {
  return api.post(`product/create`, data);
}
