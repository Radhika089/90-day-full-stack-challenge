import productModel from "../models/product.js";

export async function createProduct(req, res) {
  const { name, description, price, category, image, stock, brand } = req.body;

  if (
    !name ||
    !description ||
    price === undefined ||
    !category ||
    stock === undefined
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const existingProduct = await productModel.findOne({ name, brand });

    if (existingProduct) {
      return res.status(409).json({
        success: false,
        message: "Product already exists!",
      });
    }

    const product = await productModel.create({
      name,
      description,
      price,
      category,
      image,
      stock,
      brand,
    });

    res.status(201).json({
      success: true,
      message: "Product created Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product creation failed",
      error: error.message,
    });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await productModel.find({ isActive: true });
    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
}

export async function getSingleProduct(req, res) {
  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
}

export async function updateProduct(req, res) {
  try {
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product update failed",
      error: error.message,
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product deletion failed",
      error: error.message,
    });
  }
}
