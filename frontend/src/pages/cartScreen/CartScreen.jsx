import CartItem from "../../components/cartItem/CartItem"
import "./cartScreen.css"
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart, removeFromCart } from "../../redux/actions/cartActions"

const CartScreen = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const {cartItems} = cart

    const qtyChangeHandler=(id,qty)=>{
        dispatch(addToCart(id,qty))
    }

    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }

    const getCartCount = () =>{
        return cartItems.reduce((qty, item)=>Number(item.qty)+qty,0)
    }

    const getCartSubTotal = () =>{
        return cartItems.reduce((price,item)=>(item.price*item.qty)+price,0)
    }

    return (
        <div className="cartScreen">
            <div className="cartscreen__left"> 
                <h2>Shopping Cart</h2>
                {cartItems.length===0?(
                    <div>
                        Your cart is empth <Link to="/">Go Back to Shopping</Link>
                    </div>
                ):(cartItems.map(item=><CartItem key={Math.floor(Math.random()*100)} item={item} qtyChangeHandler={qtyChangeHandler} removeFromCartHandler={removeFromCartHandler} />))}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
