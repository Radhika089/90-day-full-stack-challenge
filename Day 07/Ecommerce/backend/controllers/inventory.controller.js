import productModel from "../models/product.js";

export async function getInventory(req, res) {
  try {
    const products = await productModel
      .find()
      .populate("category", "name slug")
      .select("name image category stock price brand isActive");

    const inventory = products.map((product) => {
      let status = "in-stock";

      if (product.stock === 0) {
        status = "out-of-stock";
      } else if (product.stock <= 5) {
        status = "low-stock";
      }

      return {
        _id: product._id,
        name: product.name,
        image: product.image,
        category: product.category,
        stock: product.stock,
        price: product.price,
        brand: product.brand,
        isActive: product.isActive,
        status,
      };
    });

    res.status(200).json({
      success: true,
      count: inventory.length,
      inventory,
    });
  } catch (error) {
    console.error("Get inventory error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch inventory",
      error: error.message,
    });
  }
}
