import { model, Schema } from "mongoose";
import type { IUser } from "./user.interface.js";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isPasswordChange: { type: Boolean, required: true },
  role: { type: String, required: true, enum: ['admin','vendor','customer'] },
  status: { type: String, enum: ["active", "blocked", "pending"] },
  isDeleted: { type: Boolean, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const userModel = model<IUser>('users',userSchema)