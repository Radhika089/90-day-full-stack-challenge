import cartModel from "../models/cart.js";
import orderModel from "../models/order.js";
import productModel from "../models/product.js";

export async function createOrder(req, res) {
  const { shippingAddress } = req.body;

  try {
    const cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    if (cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    let subtotal = 0;
    let discount = 0;
    let shippingFee = 5;
    let orderItems = [];

    for (const item of cart.items) {
      const product = await productModel.findById(item.product);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      if (item.quantity > product.stock) {
        return res.status(400).json({
          success: false,
          message: "Requested quantity exceeds available stock",
        });
      }

      subtotal += product.price * item.quantity;

      orderItems.push({
        product: item.product,
        quantity: item.quantity,
        price: product.price,
      });
    }

    let totalAmount = subtotal + shippingFee - discount;

    const order = await orderModel.create({
      user: req.user._id,
      items: orderItems,
      shippingAddress,
      shippingFee,
      totalAmount,
      subtotal,
      discount,
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
}

export async function getMyOrders(req, res) {
  try {
    const orders = await orderModel
      .find({ user: req.user._id })
      .populate("items.product")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
}

export async function getOrderById(req, res) {
  try {
    const order = await orderModel
      .findOne({
        user: req.user._id,
        _id: req.params.id,
      })
      .populate("items.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order fetched successfully",
      order,
    });
  } catch (error) {
    console.error("Get order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch order",
      error: error.message,
    });
  }
}

export async function cancelOrder(req, res) {
  try {
    const order = await orderModel.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    if (
      order.orderStatus === "shipped" ||
      order.orderStatus === "delivered" ||
      order.orderStatus === "cancelled"
    ) {
      return res.status(400).json({
        success: false,
        message: "Order cannot be cancelled!",
      });
    }

    order.orderStatus = "cancelled";
    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      order,
    });
  } catch (error) {
    console.error("Cancel order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to cancel order",
      error: error.message,
    });
  }
}

export async function getAllOrders(req, res) {
  try {
    const orders = await orderModel
      .find()
      .populate("user", "name email")
      .populate("items.product")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "All orders fetched successfully",
      orders,
    });
  } catch (error) {
    console.error("Get all orders error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
}
