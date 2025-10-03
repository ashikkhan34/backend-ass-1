export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: "admin" | "vendor" | "customer";
    isPasswordChange: boolean;
    status: "active" | "blocked" | "pending";
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=user.interface.d.ts.map