import { Types } from "mongoose";

export interface IOrder {
  id: string; // unique order id
  customer: Types.ObjectId; // reference to User
  products: {
    product: Types.ObjectId; // reference to Product
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  shippingAddress: string;
  billingAddress: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
