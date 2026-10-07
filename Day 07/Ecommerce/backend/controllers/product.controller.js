import productModel from "../models/product.js";
import categoryModel from "../models/category.js";

export async function createProduct(req, res) {
  const {
    name,
    description,
    price,
    category,
    stock,
    brand,
    type,
    origin,
    roast,
  } = req.body;

  if (
    !name ||
    !description ||
    price === undefined ||
    !category ||
    stock === undefined ||
    !req.file
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const categoryExists = await categoryModel.findById(category);

    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

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
      image: req.file.path,
      stock,
      brand,
      type,
      origin,
      roast,
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
    const { search, admin } = req.query;

    let query = {};

    // Customer side should only see active products
    if (admin !== "true") {
      query.isActive = true;
    }

    if (search) {
      const matchingCategories = await categoryModel
        .find({
          name: { $regex: search, $options: "i" },
        })
        .select("_id");

      const categoryIds = matchingCategories.map((category) => category._id);

      query.$or = [
        {
          name: { $regex: search, $options: "i" },
        },
        {
          brand: { $regex: search, $options: "i" },
        },
        {
          category: { $in: categoryIds },
        },
      ];
    }

    const products = await productModel
      .find(query)
      .populate("category", "name slug description isActive")
      .sort({ createdAt: -1 });

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
    const product = await productModel
      .findById(req.params.id)
      .populate("category", "name slug description isActive");

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
    const updateData = { ...req.body };

    if (req.file) {
      updateData.image = req.file.path;
    }

    if (updateData.category) {
      const categoryExists = await categoryModel.findById(updateData.category);

      if (!categoryExists) {
        return res.status(404).json({
          success: false,
          message: "Category not found!",
        });
      }
    }

    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      updateData,
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

export async function updateProductStock(req, res) {
  const { quantity } = req.body;

  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    if (quantity < 0) {
      return res.status(400).json({
        success: false,
        message: "Stock quantity cannot be negative.",
      });
    }

    product.stock = quantity;

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product stock updated successfully.",
      product,
    });
  } catch (error) {
    console.error("Update Product stock error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update product stock.",
      error: error.message,
    });
  }
}
