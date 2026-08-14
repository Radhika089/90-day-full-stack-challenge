import OrderModel from "../models/order.js";
import ProductModel from "../models/product.js";

export async function createOrder(req, res) {
  try {
    const {
      customer,
      items,
      discount = 0,
      tax = 0,
      paymentMethod = "Cash",
      paymentStatus = "Pending",
      orderStatus = "Pending",
      shippingAddress,
    } = req.body;

    if (!customer?.name) {
      return res.status(400).json({
        success: false,
        message: "Customer name is required",
      });
    }

    if (!customer?.phone) {
      return res.status(400).json({
        success: false,
        message: "Customer phone is required",
      });
    }

    if (!shippingAddress) {
      return res.status(400).json({
        success: false,
        message: "Shipping address is required",
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Order must contain at least one product",
      });
    }

    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await ProductModel.findById(item.product);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product not found: ${item.product}`,
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Not enough stock for ${product.name}`,
        });
      }

      const itemTotal = product.price * item.quantity;

      subtotal += itemTotal;

      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price,
      });
    }

    const totalAmount = Math.max(subtotal - discount + tax, 0);

    const lastOrder = await OrderModel.findOne().sort({
      createdAt: -1,
    });

    let orderNumber = 1001;

    if (lastOrder) {
      orderNumber = Number(lastOrder.orderId.replace("ORD-", "")) + 1;
    }

    const orderId = `ORD-${orderNumber}`;

    const order = await OrderModel.create({
      orderId,
      customer,
      items: orderItems,
      totalAmount,
      paymentMethod,
      paymentStatus,
      orderStatus,
      shippingAddress,
      createdBy: req.user._id,
    });

    // Reduce stock
    for (const item of orderItems) {
      await ProductModel.findByIdAndUpdate(item.product, {
        $inc: {
          stock: -item.quantity,
        },
      });
    }

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getOrders(req, res) {
  try {
    const orders = await OrderModel.find()
      .populate("items.product", "name price")
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getOrderById(req, res) {
  try {
    const { id } = req.params;

    const order = await OrderModel.findById(id)
      .populate("items.product", "name price")
      .populate("createdBy", "name email");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function updateOrder(req, res) {
  try {
    const { id } = req.params;

    const {
      customer,
      paymentMethod,
      paymentStatus,
      orderStatus,
      shippingAddress,
    } = req.body;

    const order = await OrderModel.findByIdAndUpdate(
      id,
      {
        customer,
        paymentMethod,
        paymentStatus,
        orderStatus,
        shippingAddress,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order updated successfully",
      order,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function deleteOrder(req, res) {
  try {
    const { id } = req.params;

    const order = await OrderModel.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order deleted successfully",
      order,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
