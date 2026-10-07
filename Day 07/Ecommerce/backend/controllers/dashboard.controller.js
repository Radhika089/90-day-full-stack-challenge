import userModel from "../models/user.js";
import productModel from "../models/product.js";
import orderModel from "../models/order.js";

export async function getDashboard(req, res) {
  try {
    const [
      totalCustomers,
      totalProducts,
      totalOrders,
      revenueResult,
      pendingOrders,
      lowStockProducts,
      outOfStockProducts,
      recentOrders,
    ] = await Promise.all([
      userModel.countDocuments({ role: "user" }),

      productModel.countDocuments({ isActive: true }),

      orderModel.countDocuments(),

      orderModel.aggregate([
        {
          $match: {
            orderStatus: { $ne: "cancelled" },
            paymentStatus: { $in: ["paid", "pending"] },
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: "$totalAmount" },
          },
        },
      ]),

      orderModel.countDocuments({
        orderStatus: { $in: ["pending", "processing"] },
      }),

      productModel.countDocuments({
        isActive: true,
        stock: { $gt: 0, $lte: 5 },
      }),

      productModel.countDocuments({
        isActive: true,
        stock: 0,
      }),

      orderModel
        .find()
        .populate("user", "name email")
        .sort({ createdAt: -1 })
        .limit(5)
        .select(
          "user totalAmount paymentStatus paymentMethod orderStatus createdAt",
        ),
    ]);

    const totalRevenue = revenueResult[0]?.total || 0;

    res.status(200).json({
      success: true,
      dashboard: {
        totalCustomers,
        totalProducts,
        totalOrders,
        totalRevenue,
        pendingOrders,
        lowStockProducts,
        outOfStockProducts,
        recentOrders,
      },
    });
  } catch (error) {
    console.error("Dashboard error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard",
      error: error.message,
    });
  }
}
