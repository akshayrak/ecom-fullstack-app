import React from 'react'
import "./cartItem.css"
import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
const CartItem = () => {
    return (
        <div className="cartItem">
            <div className="cartitem__image">
                <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="" />
            </div>
            <Link to={`/product/${111}`} className="cartitem__name">
                <p>Product 1</p>
            </Link>
            <p className="cartitem__price">499.99</p>
            <select name="" id="" className="cartitem__select">
                <option value="1">1</option>
            </select>
            <button className="cartitem__deleteBtn">
                <DeleteIcon />
            </button>
        </div>
    )
}

export default CartItem
