import mongoose, { model, Schema } from "mongoose";
import type{ IOrder } from "./order.interface.js";

const oderSchema = new Schema<IOrder>({
  id: { type: String, required: true, unique: true },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed", "refunded"],
    default: "pending",
  },
  shippingAddress: { type: String, required: true },
  billingAddress: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const orderModel = model<IOrder>('order',oderSchema)