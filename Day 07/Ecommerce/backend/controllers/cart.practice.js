import cartModel from "../models/cart.js";
import productModel from "../models/product.js";

export async function addToCart(req, res) {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({
      success: false,
      message: "ProductId and quantity is required.",
    });
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: "quantity must be positive.",
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
        message: "Requested quantity exceeds available stock",
      });
    }

    let cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      cart = await cartModel.create({
        user: req.user._id,
        items: [{ product: productId, quantity: quantity }],
      });

      return res.status(201).json({
        success: true,
        message: "Cart created successfully.",
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
        });
      }

      item.quantity = newQuantity;
    } else {
      cart.items.push({
        product: productId,
        quantity: quantity,
      });
    }

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Items added to cart successfully.",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to add in cart..",
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
        message: "Cart not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Get all item",
      cart,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Items",
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

  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: "quantity must be positive.",
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
        message: "Requested quantity is exceed the current stock.",
      });
    }

    const cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found.",
      });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found.",
      });
    }

    item.quantity = quantity;

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Items updated successfully in the cart.",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to update the cart..",
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
        message: "Cart not found!",
      });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found.",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId,
    );

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Item remove from the cart.",
      cart,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to remove Items",
    });
  }
}

export async function clearCart(req, res) {
  try {
    const cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found!",
      });
    }

    cart.items = [];
    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Cart is empty now.",
      cart,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Items",
    });
  }
}
