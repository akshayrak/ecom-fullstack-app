import { Link } from 'react-router-dom'
import React from 'react'
import "./product.css"

const Product = () => {
    return (
        <div className="product">

            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="someimg" />
            <div className="product__info">
                <p className="info__name">product Name</p>
                <p className="info__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minima dolore consequatur vero! Ratione, natus ad quia dolorem ea sequi maxime tempora, ducimus vel asperiores reprehenderit nam accusamus nisi excepturi dicta.
                </p>
                <p className="info__price">$499</p>
                <Link to={`product/${111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product
