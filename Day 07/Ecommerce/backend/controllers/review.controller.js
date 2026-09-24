import productModel from "../models/product.js";
import reviewModel from "../models/review.js";

export async function createReview(req, res) {
  const { rating, comment } = req.body;

  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const existingReview = await reviewModel.findOne({
      user: req.user._id,
      product: req.params.id,
    });

    if (existingReview) {
      return res.status(409).json({
        success: false,
        message: "You have already reviewed this product.",
      });
    }

    const review = await reviewModel.create({
      user: req.user._id,
      product: req.params.id,
      rating,
      comment,
    });

    // Get all reviews of this product
    const reviews = await reviewModel.find({
      product: req.params.id,
    });

    // Count reviews
    const reviewCount = reviews.length;

    // Calculate average rating
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

    const averageRating = totalRating / reviewCount;

    // Update product
    product.rating = averageRating;
    product.reviewCount = reviewCount;

    await product.save();

    return res.status(201).json({
      success: true,
      message: "Review created successfully.",
      review,
    });
  } catch (error) {
    console.error("Create review error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create review",
      error: error.message,
    });
  }
}

export async function getProductReviews(req, res) {
  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const reviews = await reviewModel
      .find({
        product: req.params.id,
      })
      .populate("user", "name");

    return res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      reviews,
    });
  } catch (error) {
    console.error("Get product reviews error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
}

export async function updateReview(req, res) {
  const { rating, comment } = req.body;

  try {
    const review = await reviewModel.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found!",
      });
    }

    review.rating = rating;
    review.comment = comment;

    await review.save();

    // Get the product
    const product = await productModel.findById(review.product);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Get all reviews of this product
    const reviews = await reviewModel.find({
      product: review.product,
    });

    const reviewCount = reviews.length;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

    const averageRating = totalRating / reviewCount;

    // Update product rating and review count
    product.rating = averageRating;
    product.reviewCount = reviewCount;

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Review updated successfully",
      review,
    });
  } catch (error) {
    console.error("Update review error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update review",
      error: error.message,
    });
  }
}

export async function deleteReview(req, res) {
  try {
    const review = await reviewModel.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found!",
      });
    }

    const productId = review.product;

    await reviewModel.findByIdAndDelete(req.params.id);

    // Get the product
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Get remaining reviews
    const reviews = await reviewModel.find({
      product: productId,
    });

    const reviewCount = reviews.length;

    let averageRating = 0;

    if (reviewCount > 0) {
      const totalRating = reviews.reduce(
        (sum, review) => sum + review.rating,
        0,
      );

      averageRating = totalRating / reviewCount;
    }

    // Update product rating and review count
    product.rating = averageRating;
    product.reviewCount = reviewCount;

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    console.error("Delete review error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete review",
      error: error.message,
    });
  }
}
