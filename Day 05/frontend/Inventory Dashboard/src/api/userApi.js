import api from "./axios";

export async function loginUser(data) {
  const response = await api.post("/user/login", data);
  return response.data;
}
export async function registerUser(data) {
  const response = await api.post("/user/register", data);
  return response.data;
}
export async function logoutUser() {
  const response = await api.post("/user/logout");
  return response.data;
}
export async function getCurrentUser() {
  const response = await api.get("/user/me");
  return response.data;
}
