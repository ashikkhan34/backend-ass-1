import type { IProduct } from "./product.interface.js";
import { productModel } from "./product.model.js";


const createProductService = async(payLoad:IProduct) =>{
    return await productModel.create(payLoad)
}

const getAllProductService = async() =>{
    return await productModel.find()
}

const getAProductService = async(id:any) =>{
    return await productModel.findById(id)
}

const updateProductService = async(id:any, payLoad:Partial<IProduct>) =>{
    return await productModel.findByIdAndUpdate(
        id,
        {$set:payLoad},
        {new:true, runValidators:true}
    )
}
const deleteProductService = async(id:any) =>{
    return await productModel.findByIdAndDelete(id)
}


export const productService = {
    createProductService,
    getAllProductService,
    getAProductService,
    updateProductService,
    deleteProductService
}