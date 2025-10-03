import dotenv from 'dotenv'
dotenv.config()

import app from "./app.js";
import mongoose from "mongoose";

main().catch(err => console.log(err));
const PORT = process.env.PORT || 5000

async function main() {
  await mongoose.connect(process.env.MONGODB_URL as string);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
}