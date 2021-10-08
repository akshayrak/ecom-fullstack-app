const Product = require('../models/Product')    //importing model

//fetching all the products from db
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"server Error"})
    }
}

//fetching single product from db by id
const getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id)
        res.json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"server Error"})
    }
}

//named exports of controller functions that fetch data from db
module.exports = {
    getAllProducts,
    getProductById
}