import productModel from "../models/product.js";
import wishlistModel from "../models/wishlist.js";

export async function addToWishlist(req, res) {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({
      success: false,
      message: "ProductId is required.",
    });
  }

  try {
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    let wishlist = await wishlistModel.findOne({ user: req.user._id });

    if (!wishlist) {
      wishlist = await wishlistModel.create({
        user: req.user._id,
        products: [productId],
      });
      return res.status(201).json({
        success: true,
        message: "Product added to wishlist!.",
      });
    }

    const existingProduct = wishlist.products.find(
      (product) => product.toString() === productId,
    );

    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist.",
      });
    }

    wishlist.products.push(productId);
    await wishlist.save();

    return res.status(200).json({
      success: true,
      message: "Product added to wishlist",
      wishlist,
    });
  } catch (error) {
    console.error("Add wishlist error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to add product to wishlist",
      error: error.message,
    });
  }
}

export async function getWishlist(req, res) {
  try {
    const wishlist = await wishlistModel
      .findOne({ user: req.user._id })
      .populate("products");

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Wishlist fetched successfully",
      wishlist,
    });
  } catch (error) {
    console.error("Get wishlist error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch wishlist",
      error: error.message,
    });
  }
}

export async function removeFromWishlist(req, res) {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({
      success: false,
      message: "ProductId is required.",
    });
  }

  try {
    const wishlist = await wishlistModel.findOne({ user: req.user._id });

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      });
    }

    const product = wishlist.products.find(
      (product) => product.toString() === productId,
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found in wishlist",
      });
    }

    wishlist.products = wishlist.products.filter(
      (product) => product.toString() !== productId,
    );

    await wishlist.save();

    return res.status(200).json({
      success: true,
      message: "Product removed from wishlist successfully",
      wishlist,
    });
  } catch (error) {
    console.error("Remove wishlist error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to remove wishlist",
      error: error.message,
    });
  }
}

export async function clearWishlist(req, res) {
  try {
    const wishlist = await wishlistModel.findOne({ user: req.user._id });

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      });
    }

    wishlist.products = [];

    await wishlist.save();

    return res.status(200).json({
      success: true,
      message: "Wishlist cleared successfully",
      wishlist,
    });
  } catch (error) {
    console.error("Clear wishlist error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to clear wishlist",
      error: error.message,
    });
  }
}
