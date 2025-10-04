import express from 'express'
import { productController } from './product.controller.js'

const router = express.Router()

router.post('/create-product',productController.createProductController)
router.get('/',productController.getAllProductController)
router.get('/:id',productController.getAProductController)
router.put('/update-product/:id',productController.updateProductController)
router.delete('/delete-product/:id',productController.deleteProductController)

export const productRouter = router