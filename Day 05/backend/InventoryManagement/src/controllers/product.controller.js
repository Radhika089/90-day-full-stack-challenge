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
  const {
    search,
    category,
    status,
    minPrice,
    maxPrice,
    sort,
    page = 1,
    limit = 10,
  } = req.query;

  try {
    let query = {};

    // SEARCH
    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    // CATEGORY
    if (category) {
      query.category = category;
    }

    // STATUS
    if (status === "out") {
      query.stock = 0;
    }

    if (status === "low") {
      query.stock = {
        $gt: 0,
        $lte: 10,
      };
    }

    if (status === "in") {
      query.stock = {
        $gt: 10,
      };
    }

    // PRICE RANGE
    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    // SORTING
    let sortOption = {};

    switch (sort) {
      case "price_asc":
        sortOption = { price: 1 };
        break;

      case "price_desc":
        sortOption = { price: -1 };
        break;

      case "name_asc":
        sortOption = { name: 1 };
        break;

      case "name_desc":
        sortOption = { name: -1 };
        break;

      case "newest":
        sortOption = { createdAt: -1 };
        break;

      case "oldest":
        sortOption = { createdAt: 1 };
        break;

      default:
        sortOption = { createdAt: -1 };
    }

    // PAGINATION
    const currentPage = Math.max(Number(page) || 1, 1);
    const pageLimit = Math.max(Number(limit) || 10, 1);

    const skip = (currentPage - 1) * pageLimit;

    // GET PRODUCTS
    const products = await productModel
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(pageLimit)
      .populate("createdBy", "name email")
      .populate("category", "name description active");

    // PAGINATION
    const total = await productModel.countDocuments(query);

    const totalPages = Math.ceil(total / pageLimit);

    return res.status(200).json({
      success: true,
      products,

      pagination: {
        currentPage,
        pageLimit,
        totalProducts: total,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1,
      },
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
      .populate("createdBy", "name email")
      .populate("category", "name description active");
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
    const products = await productModel
      .find({ category: req.params.category })
      .populate("category", "name description active");

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
