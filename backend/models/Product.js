const mongoose = require('mongoose')    //importing mongoose

//database schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    }
})

//creating a model using schema
const Product = mongoose.model('product', productSchema)

module.exports = Product    //exporting model