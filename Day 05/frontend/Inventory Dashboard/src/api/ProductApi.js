import api from "./axios";

// Get all products
export async function getProducts(params) {
  const response = await api.get("/product/getProduct", { params });
  return response.data;
}

// Get single product
export async function getProductById(id) {
  const response = await api.get(`/product/getSingleProduct/${id}`);
  return response.data;
}

// Get products by category
export async function getProductsByCategory(category) {
  const response = await api.get(`/product/getCategory/${category}`);
  return response.data;
}

// Get low-stock products
export async function getLowStockProducts() {
  const response = await api.get("/product/getLowProduct");
  return response.data;
}

// Get out-of-stock products
export async function getOutOfStockProducts() {
  const response = await api.get("/product/out-of-stock");
  return response.data;
}

// Update product
export async function updateProduct(id, data) {
  const response = await api.patch(`/product/update/${id}`, data);
  return response.data;
}

// Delete product
export async function deleteProduct(id) {
  const response = await api.delete(`/product/delete/${id}`);
  return response.data;
}

// Create product
export async function createProduct(data) {
  const response = await api.post("/product/create", data);
  return response.data;
}
