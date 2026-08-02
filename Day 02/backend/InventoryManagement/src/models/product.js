import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
      enum: ["Electronics", "Clothing", "Furniture", "Food"],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
