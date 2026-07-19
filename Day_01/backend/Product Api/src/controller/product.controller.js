import productModel from "../model/product.js";

export async function createProduct(req, res) {
  const { name, category, price, stock } = req.body;

  if (!name || !category || price == null || stock === null) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  try {
    const product = await productModel.create({
      name,
      category,
      price,
      stock,
    });

    return res.status(201).json({
      success: true,
      message: "Product created Successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function getProduct(req, res) {
  try {
    const { search, category, sort, page = 1, limit = 10 } = req.query;
    const query = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    let sortQuery = {};

    if (sort === "price") {
      sortQuery = { price: 1 };
    } else if (sort === "-price") {
      sortQuery = { price: -1 };
    }

    const skip = (page - 1) * limit;

    const product = await productModel
      .find(query)
      .sort(sortQuery)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await productModel.countDocuments(query);

    return res.status(200).json({
      success: true,
      page: Number(page),
      limit: Number(limit),
      total: total,
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
