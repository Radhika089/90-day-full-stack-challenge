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
