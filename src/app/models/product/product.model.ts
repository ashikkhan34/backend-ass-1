import mongoose, { model, Schema } from "mongoose";
import type { IProduct } from "./product.interface.js";

const productSchema = new Schema<IProduct>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  stock: { type: Number, default: 0 },
  images: [{ type: String }],
  brand: { type: String },
  ratings: { type: Number, default: 0, min: 0, max: 5 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  isFeatured: { type: Boolean, default: false },
  discount: { type: Number, default: 0 },
  sku: { type: String, unique: true },
});

export const productModel = model<IProduct>('products',productSchema)
