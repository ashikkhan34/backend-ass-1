import { Types } from "mongoose";

export interface ICategory {
  id: string;
  name: string;
  description?: string;
  slug: string;
  parentCategory?: Types.ObjectId; // reference to another category
  image?: string;
  status: "active" | "inactive";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
