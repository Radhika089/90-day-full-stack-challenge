import api from "./axios";

// Get all categories
export async function getCategories() {
  const response = await api.get("/category/getCategories");
  return response.data;
}

// Get single category
export async function getCategoryById(id) {
  const response = await api.get(`/category/${id}`);
  return response.data;
}

// Create category
export async function createCategory(data) {
  const response = await api.post("/category/create", data);
  return response.data;
}

// Update category
export async function updateCategory(id, data) {
  const response = await api.put(`/category/${id}`, data);
  return response.data;
}

// Delete category
export async function deleteCategory(id) {
  const response = await api.delete(`/category/${id}`);
  return response.data;
}
