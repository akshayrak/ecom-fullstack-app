require('dotenv').config()

const express = require('express')
const app=express()

const {PORT} = process.env||5000

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))