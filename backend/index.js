import express from 'express'
import dotenv from 'dotenv'
// import mongoose from 'mongoose'
import process from 'process'
import cors from 'cors'
import { connectDB } from './config/db.js'
import authrouter from './router/authroutes.js'
dotenv.config()
const app = express()


//Connection is secured and authorized
//DB connection is prior to establishing a server.
connectDB()


app.use(cors())
app.use(express.json())
app.use('/auth', authrouter)

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running at ${process.env.PORT}`)
})




