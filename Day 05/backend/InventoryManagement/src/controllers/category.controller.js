import CategoryModel from "../models/category.js";

export async function createCategory(req, res) {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }

  try {
    const categoryName = name.trim().toLowerCase();

    const existingCategory = await CategoryModel.findOne({
      name: categoryName,
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exist!",
      });
    }

    const category = await CategoryModel.create({
      name: categoryName,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Category added successfully!",
      category,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getCategories(req, res) {
  try {
    const categories = await CategoryModel.find();

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

export async function getCategoryById(req, res) {
  try {
    const { id } = req.params;

    const category = await CategoryModel.findById(id);

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
      message: error.message,
    });
  }
}

export async function editCategory(req, res) {
  try {
    const { id } = req.params;

    const category = await CategoryModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category Updated",
      category,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function deleteCategory(req, res) {
  try {
    const { id } = req.params;

    const category = await CategoryModel.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category Deleted successfully!",
      category,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
