import React from 'react'
import "./cartItem.css"
import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
const CartItem = ({item, qtyChangeHandler, removeFromCartHandler}) => {
    return (
        <div className="cartItem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">${`${item.price}x${item.qty}=$${item.price*item.qty}`}</p>
            <select value={item.qty} onChange={(e)=>qtyChangeHandler(item.product, e.target.value)} name="qty" id="qty" className="cartitem__select">
                {Array.apply(null,{length:item.countInStock}).map((x,i)=><option key={i} value={i+1}>{i+1}</option>)}
            </select>
            <button className="cartitem__deleteBtn" onClick={()=>removeFromCartHandler(item.product)}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default CartItem
