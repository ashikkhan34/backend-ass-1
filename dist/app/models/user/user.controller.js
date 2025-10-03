import { userService } from "./user.service.js";
const CreateUserController = async (req, res) => {
    try {
        const users = await userService.createUserService(req.body);
        res.status(201).json({
            message: "user data create",
            success: true,
            data: users,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAllUserController = async (req, res) => {
    try {
        const allUsers = await userService.getUserService();
        res.status(200).json({
            message: "get all user data",
            success: true,
            data: allUsers,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAUserController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                message: 'is is required',
                success: false
            });
        }
        const allUsers = await userService.getAUserService(id);
        res.status(202).json({
            message: "get a user data",
            success: true,
            data: allUsers,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const deleteAUserController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                message: 'id is required',
                success: false
            });
        }
        const allUsers = await userService.deleteAUserService(id);
        res.status(202).json({
            message: "delete a user data",
            success: true,
            data: allUsers,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const updateAUserController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                message: 'id is required',
                success: false
            });
        }
        const allUsers = await userService.updateAUserService(id, req.body);
        res.status(202).json({
            message: "update a user data",
            success: true,
            data: allUsers,
        });
    }
    catch (err) {
        console.log(err);
    }
};
export const userController = {
    CreateUserController,
    getAllUserController,
    getAUserController,
    deleteAUserController,
    updateAUserController
};
//# sourceMappingURL=user.controller.js.map