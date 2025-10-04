import type { Request, Response } from "express";
import { productService } from "./product.service.js";


const createProductController = async (req:Request,res:Response) =>{
    try{
        const products = await productService.createProductService(req.body)
        res.send(201).json({
            message:'product data create successfully',
            success:true,
            data:products
        })
    }catch(err){
        console.log(err)
    }
}
const getAllProductController = async (req:Request,res:Response) =>{
    try{
        const products = await productService.getAllProductService()
        res.send(200).json({
            message:'product data get successfully',
            success:true,
            data:products
        })
    }catch(err){
        console.log(err)
    }
}
const getAProductController = async (req:Request,res:Response) =>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
        const products = await productService.getAProductService(id)
        if(!products) return res.status(404).json({success:false, message:'product not found'})
        res.send(200).json({
            message:'product single data get successfully',
            success:true,
            data:products
        })
    }catch(err){
        console.log(err)
    }
}
const updateProductController = async (req:Request,res:Response) =>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
        const products = await productService.updateProductService(id,req.body)
        if(!products) return res.status(404).json({success:false, message:'product not found'})
        res.send(200).json({
            message:'product data update successfully',
            success:true,
            data:products
        })
    }catch(err){
        console.log(err)
    }
}
const deleteProductController = async (req:Request,res:Response) =>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
        const products = await productService.deleteProductService(id)
        if(!products) return res.status(404).json({success:false, message:'product not found'})
        res.send(200).json({
            message:'product data update successfully',
            success:true,
            data:products
        })
    }catch(err){
        console.log(err)
    }
}


export const productController = {
    createProductController,
    getAllProductController,
    getAProductController,
    updateProductController,
    deleteProductController
}