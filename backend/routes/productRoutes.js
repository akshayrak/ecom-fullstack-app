const express = require('express')  //importing express

const router=express.Router();  //router function

//named import of controller functions that fetch data
const {getAllProducts,getProductById} = require('../controller/productControllers') 

//@desc GET all products form db
//@route GET /api/products
//@access Public
router.get('/',getAllProducts)


//@desc GET aa product by id form db
//@route GET /api/products/:id
//@access Public
router.get('/:id',getProductById)

module.exports = router  //exporting router function