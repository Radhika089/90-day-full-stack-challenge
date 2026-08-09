import productModel from "../models/product.js";

export async function createProduct(req, res) {
  const { name, category, description, price, stock } = req.body;

  if (!name || !category || !description || price == null || stock == null) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  if (Number(price) < 0) {
    return res.status(400).json({
      success: false,
      message: "Price cannot be negative!",
    });
  }
  if (Number(stock) < 0) {
    return res.status(400).json({
      success: false,
      message: "Stock cannot be negative!",
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
      createdBy: req.user._id,
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
  // object keys gives/returns an array of the property name(keys)

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No fields provided to update!",
    });
  }

  const { name, category, description, price, stock } = req.body;

  if (price !== undefined && Number(price) < 0) {
    return res.status(400).json({
      success: false,
      message: "Price cannot be negative!",
    });
  }

  if (stock !== undefined && Number(stock) < 0) {
    return res.status(400).json({
      success: false,
      message: "Stock cannot be negative!",
    });
  }

  try {
    const product = await productModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
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
    const product = await productModel.findOne({
      _id: req.params.id,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    if (product.stock > 0) {
      return res.status(400).json({
        success: false,
        message: "Please clear stock before deleting product.",
      });
    }

    await product.deleteOne();

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
  const { search, category, price, sort } = req.query;
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

    let sortOption = {};
    // can use switch case
    if (sort === "-price") {
      sortOption = { price: -1 };
    } else if (sort === "price") {
      sortOption = { price: 1 };
    } else if (sort === "name") {
      sortOption = { name: 1 };
    } else if (sort === "-createdAt") {
      sortOption = { createdAt: -1 };
    }

    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const products = await productModel
      .find(query)
      .sort(sortOption)
      .limit(limit)
      .skip(skip)
      .populate("createdBy", "name email");

    const total = await productModel.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      success: true,
      products,
      page,
      limit,
      total,
      totalPages,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}

export async function getSingleProduct(req, res) {
  try {
    const product = await productModel
      .findById(req.params.id)
      .populate("createdBy", "name email");
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    return res.status(200).json({
      success: true,
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

export async function getLowStockProducts(req, res) {
  try {
    const products = await productModel.find({ stock: { $lte: 5 } });

    return res.status(200).json({
      success: true,
      message: "Low Stock Products",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function getDashboardStats(req, res) {
  try {
    const totalProducts = await productModel.countDocuments();

    const lowStock = await productModel.countDocuments({
      stock: { $lte: 5 },
    });
    const outOfStock = await productModel.countDocuments({
      stock: { $eq: 0 },
    });
    const totalStockResult = await productModel.aggregate([
      {
        $group: {
          _id: null,
          totalStock: {
            $sum: "$stock",
          },
        },
      },
    ]);

    const totalStock = totalStockResult[0]?.totalStock || 0;

    return res.status(200).json({
      success: true,
      data: {
        totalProducts,
        totalStock,
        lowStock,
        outOfStock,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getCategoryStats(req, res) {
  try {
    const categories = await productModel.aggregate([
      {
        $group: {
          _id: "$category",
          count: {
            $sum: 1,
          },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          count: 1,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getOutOfStockProducts(req, res) {
  try {
    const products = await productModel.find({ stock: 0 });

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function getProductsByCategory(req, res) {
  try {
    const products = await productModel.find({ category: req.params.category });

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
