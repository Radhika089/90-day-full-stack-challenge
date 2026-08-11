import api from "./axios";

export async function loginUser(data) {
  const response = await api.post("/auth/login", data);
  return response.data;
}
export async function registerUser(data) {
  const response = await api.post("/auth/register", data);
  return response.data;
}
export async function logoutUser() {
  const response = await api.post("/auth/logout");
  return response.data;
}
export async function getCurrentUser() {
  const response = await api.get("/auth/me");
  return response.data;
}
