import mongoose from "mongoose";
import process from 'process'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to Database test")
  }
  catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}
export { connectDB }