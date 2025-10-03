import type { Request, Response } from "express";
export declare const userController: {
    CreateUserController: (req: Request, res: Response) => Promise<void>;
    getAllUserController: (req: Request, res: Response) => Promise<void>;
    getAUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteAUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateAUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=user.controller.d.ts.map