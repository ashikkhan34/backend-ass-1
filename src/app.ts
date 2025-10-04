import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { userRoute } from './app/models/user/user.route.js';
import { productRouter } from './app/models/product/product.route.js';
const app = express()

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/users',userRoute)
app.use('/api/products',productRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;


