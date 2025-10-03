import type{ ICategory } from "./category.interface.js";
import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema<ICategory>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  description: { type: String },
  slug: { type: String, required: true, unique: true },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  image: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  isDeleted: { type: Boolean, default: false },
});

export const categoryModel = model<ICategory>('category',categorySchema)
