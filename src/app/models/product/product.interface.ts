import type mongoose from "mongoose";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: mongoose.Types.ObjectId;
  vendor: mongoose.Types.ObjectId;
  stock: number;
  images: string[];
  brand: string;
  ratings: number;
  reviews: mongoose.Types.ObjectId[];
  isFeatured: boolean;
  discount: number;
  sku: string;
}
