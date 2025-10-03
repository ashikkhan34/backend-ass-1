import { model, Schema } from "mongoose";
const userSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isPasswordChange: { type: Boolean, required: true },
    role: { type: String, required: true, enum: ['admin', 'vendor', 'customer'] },
    status: { type: String, enum: ["active", "blocked", "pending"] },
    isDeleted: { type: Boolean, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
export const userModel = model('users', userSchema);
//# sourceMappingURL=user.model.js.map