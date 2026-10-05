import api from "./api";

export const createOrder = async (shippingAddress, paymentMethod) => {
  const response = await api.post("/order", { shippingAddress, paymentMethod });
  return response.data;
};

export const createRazorpayOrder = async (orderId) => {
  const response = await api.post("/order/payment/create", { orderId });
  return response.data;
};

export const verifyPayment = async (paymentData) => {
  const response = await api.post("/order/payment/verify", paymentData);
  return response.data;
};

export const getMyOrders = async () => {
  const response = await api.get("/order");
  return response.data;
};

export const getOrderById = async (orderId) => {
  const response = await api.get(`/order/${orderId}`);
  return response.data;
};

export const cancelOrder = async (orderId) => {
  const response = await api.patch(`/order/${orderId}/cancel`);
  return response.data;
};
