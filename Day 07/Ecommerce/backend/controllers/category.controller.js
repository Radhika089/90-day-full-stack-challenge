import categoryModel from "../models/category.js";
import productModel from "../models/product.js";

export async function createCategory(req, res) {
  const { name, slug, description } = req.body;

  if (!name || !slug) {
    return res.status(400).json({
      success: false,
      message: "Name and slug are required!",
    });
  }

  try {
    const existingCategory = await categoryModel.findOne({
      $or: [{ name }, { slug }],
    });

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category already exists!",
      });
    }

    const category = await categoryModel.create({
      name,
      slug,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully!",
      category,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Category creation failed!",
      error: error.message,
    });
  }
}

export async function getCategories(req, res) {
  try {
    const categories = await categoryModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch categories!",
      error: error.message,
    });
  }
}

export async function getSingleCategory(req, res) {
  try {
    const category = await categoryModel.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    return res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch category!",
      error: error.message,
    });
  }
}

export async function updateCategory(req, res) {
  const { name, slug, description, isActive } = req.body;

  if (
    name === undefined &&
    slug === undefined &&
    description === undefined &&
    isActive === undefined
  ) {
    return res.status(400).json({
      success: false,
      message: "No fields provided to update!",
    });
  }

  try {
    const category = await categoryModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        slug,
        description,
        isActive,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category updated successfully!",
      category,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Category update failed!",
      error: error.message,
    });
  }
}

export async function deleteCategory(req, res) {
  try {
    const category = await categoryModel.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    const productsUsingCategory = await productModel.countDocuments({
      category: category._id,
    });

    if (productsUsingCategory > 0) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete category because products are using it.",
      });
    }

    await category.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully!",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Category deletion failed!",
      error: error.message,
    });
  }
}
