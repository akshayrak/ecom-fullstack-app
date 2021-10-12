import React, {useEffect} from 'react'
import Product from "../../components/product/Product"
import "./homeScreen.css"
import {useSelector, useDispatch} from 'react-redux'

import {getProducts as listProducts} from '../../redux/actions/productActions'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const getProducts = useSelector(state=>state.getProducts)
    const {products, loading, error} = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="homeScreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {loading?<h2>loading</h2>:error?<h2>{error}</h2>:products.map(product=>
                    <Product key={product._id} name={product.name} imageUrl={product.imageUrl} price={product.price} id={product._id} description={product.description} />
                )}
            </div>
        </div>
    )
}

export default HomeScreen
