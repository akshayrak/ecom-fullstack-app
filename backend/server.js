require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/productRoutes')

//database connection
connectDB()

//express server
const app=express()

app.use(express.json())//use json

//routes
app.use('/api/products', productRoutes)

//port and listener
const PORT = process.env.PORT||5000
app.listen(PORT,()=>console.log(`server started on port ${PORT}`))//listen