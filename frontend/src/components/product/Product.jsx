import { Link } from 'react-router-dom'
import React from 'react'
import "./product.css"

const Product = ({name,imageUrl,price,id,description}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name} />
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__description">{description.substring(0, 100)}...</p>
                <p className="info__price">${price}</p>
                <Link to={`product/${id}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product
