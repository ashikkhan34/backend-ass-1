import type { IUser } from "./user.interface.js";
export declare const userService: {
    createUserService: (payLoad: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getUserService: () => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getAUserService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteAUserService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateAUserService: (id: string, payLoad: Partial<IUser>) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=user.service.d.ts.map