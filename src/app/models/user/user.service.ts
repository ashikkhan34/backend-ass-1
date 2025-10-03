import type { IUser } from "./user.interface.js";
import { userModel } from "./user.model.js";


const createUserService = async (payLoad:IUser)=>{
    return await userModel.create(payLoad)
}

const getUserService = async ()=>{
    return await userModel.find()
}

const getAUserService = async (id:string) =>{
    return await userModel.findById(id)
}

const updateAUserService = async(id:string, payLoad:Partial<IUser>) => {
    return await userModel.findByIdAndUpdate(
        id,
        {$set:payLoad},
        {new:true, runValidators:true}
    )
}

const deleteAUserService = async(id:string) =>{
    return await userModel.findByIdAndDelete(id)
}


export const userService = {
    createUserService,
    getUserService,
    getAUserService,
    deleteAUserService,
    updateAUserService
}