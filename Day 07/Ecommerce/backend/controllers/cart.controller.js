import cartModel from "../models/cart.js";
import productModel from "../models/product.js";

export async function addToCart(req, res) {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({
      success: false,
      message: "Product and quantity are required",
    });
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be a positive integer",
    });
  }

  try {
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (quantity > product.stock) {
      return res.status(400).json({
        success: false,
        message: "Requested quantity exceeds available stock",
      });
    }

    let cart = await cartModel.findOne({
      user: req.user._id,
    });

    if (!cart) {
      cart = await cartModel.create({
        user: req.user._id,
        items: [{ product: productId, quantity: quantity }],
      });

      return res.status(201).json({
        success: true,
        message: "Product added to cart",
        cart,
      });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (item) {
      const newQuantity = item.quantity + quantity;

      if (newQuantity > product.stock) {
        return res.status(400).json({
          success: false,
          message: "Requested quantity exceeds available stock",
        });
      }

      item.quantity = newQuantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add product to cart",
      error: error.message,
    });
  }
}

export async function getCart(req, res) {
  try {
    const cart = await cartModel
      .findOne({ user: req.user._id })
      .populate("items.product");

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All items",
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch cart",
    });
  }
}

export async function updateCart(req, res) {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({
      success: false,
      message: "ProductId and quantity is required.",
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

    if (quantity > product.stock) {
      return res.status(400).json({
        success: false,
        message: "Requested quantity exceeds the stock available..",
      });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be a positive integer",
      });
    }

    let cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    item.quantity = quantity;

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update the cart",
      error: error.message,
    });
  }
}

export async function removeFromCart(req, res) {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({
      success: false,
      message: "ProductId is required.",
    });
  }

  try {
    const cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
        cart,
      });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart",
        cart,
      });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId,
    );

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Item removed from cart successfully",
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to remove from cart",
      error: error.message,
    });
  }
}

export async function clearCart(req, res) {
  try {
    const cart = await cartModel.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = [];

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to clear cart",
      error: error.message,
    });
  }
}
