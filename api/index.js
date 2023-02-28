import express from 'express'
import mongoose from 'mongoose'
import wbRouter from './router.js'
import 'dotenv/config'

const app = express()

app.use(express.json())

mongoose.set('strictQuery', false)
// @ts-ignore
mongoose.connect(process.env.DATABASE_URL)

app.use('/api', wbRouter)

export default app