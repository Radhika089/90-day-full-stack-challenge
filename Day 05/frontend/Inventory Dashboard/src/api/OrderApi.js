import api from "./axios";

// Get all orders
export async function getOrders() {
  const response = await api.get("/order/getOrders");
  return response.data;
}

// Get single order
export async function getOrderById(id) {
  const response = await api.get(`/order/${id}`);
  return response.data;
}

// Create order
export async function createOrder(data) {
  const response = await api.post("/order/create", data);
  return response.data;
}

// Update order
export async function updateOrder(id, data) {
  const response = await api.put(`/order/${id}`, data);
  return response.data;
}

// Delete order
export async function deleteOrder(id) {
  const response = await api.delete(`/order/${id}`);
  return response.data;
}
