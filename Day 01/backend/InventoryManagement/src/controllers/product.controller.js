import productModel from "../models/product.js";

export async function createProduct(req, res) {
  const { name, category, description, price, stock } = req.body;

  if (!name || !category || !description || price == null || stock == null) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const existing = await productModel.findOne({ name });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Product Already Exist!",
      });
    }

    const product = await productModel.create({
      name,
      category,
      description,
      price,
      stock,
    });

    return res.status(201).json({
      success: true,
      message: "Product Added Successfully!",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}

export async function updateProduct(req, res) {
  const { name, category, description, price, stock } = req.body;

  if (!name || !category || !description) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const product = await productModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { name, category, description, price, stock },
      { new: true },
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product Updated Successfully!",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    const product = await productModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product Deleted Successfully!",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}

export async function getProducts(req, res) {
  const { search, category, price } = req.query;
  try {
    let query = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    if (price) {
      query.price = { $lte: Number(price) };
    }

    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const products = await productModel
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}
