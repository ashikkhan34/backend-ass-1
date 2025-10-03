import { userModel } from "./user.model.js";
const createUserService = async (payLoad) => {
    return await userModel.create(payLoad);
};
const getUserService = async () => {
    return await userModel.find();
};
const getAUserService = async (id) => {
    return await userModel.findById(id);
};
const updateAUserService = async (id, payLoad) => {
    return await userModel.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
};
const deleteAUserService = async (id) => {
    return await userModel.findByIdAndDelete(id);
};
export const userService = {
    createUserService,
    getUserService,
    getAUserService,
    deleteAUserService,
    updateAUserService
};
//# sourceMappingURL=user.service.js.map