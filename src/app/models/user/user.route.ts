import express from 'express'
import { userController } from './user.controller.js'

const router = express.Router()

router.post('/create-user', userController.CreateUserController)
router.get('/',userController.getAllUserController)
router.get('/:id',userController.getAUserController)
router.delete('/delete-user/:id',userController.deleteAUserController)
router.put('/update-user/:id',userController.updateAUserController)

export const userRoute = router;