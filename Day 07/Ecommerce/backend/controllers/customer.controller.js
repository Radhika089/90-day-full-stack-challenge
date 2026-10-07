import userModel from "../models/user.js";
import orderModel from "../models/order.js";

export async function getCustomers(req, res) {
  try {
    const customers = await userModel
      .find({ role: "user" })
      .select("-password -__v")
      .sort({ createdAt: -1 })
      .lean();

    const customerIds = customers.map((customer) => customer._id);

    const orderStats = await orderModel.aggregate([
      {
        $match: {
          user: { $in: customerIds },
          orderStatus: { $ne: "cancelled" },
        },
      },
      {
        $group: {
          _id: "$user",
          totalOrders: { $sum: 1 },
          totalSpent: { $sum: "$totalAmount" },
          lastOrder: { $max: "$createdAt" },
        },
      },
    ]);

    const statsMap = new Map(
      orderStats.map((stats) => [stats._id.toString(), stats]),
    );

    const result = customers.map((customer) => {
      const stats = statsMap.get(customer._id.toString());

      return {
        ...customer,
        totalOrders: stats?.totalOrders || 0,
        totalSpent: stats?.totalSpent || 0,
        lastOrder: stats?.lastOrder || null,
      };
    });

    res.status(200).json({
      success: true,
      count: result.length,
      customers: result,
    });
  } catch (error) {
    console.error("Get customers error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch customers",
      error: error.message,
    });
  }
}

export async function getCustomerById(req, res) {
  try {
    const customer = await userModel
      .findOne({
        _id: req.params.id,
        role: "user",
      })
      .select("-password")
      .lean();

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    const orders = await orderModel
      .find({
        user: customer._id,
      })
      .populate("items.product", "name image")
      .sort({ createdAt: -1 });

    const validOrders = orders.filter(
      (order) => order.orderStatus !== "cancelled",
    );

    const totalSpent = validOrders.reduce(
      (total, order) => total + order.totalAmount,
      0,
    );

    res.status(200).json({
      success: true,
      customer: {
        ...customer,
        totalOrders: validOrders.length,
        totalSpent,
        orders,
      },
    });
  } catch (error) {
    console.error("Get customer error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch customer",
      error: error.message,
    });
  }
}
