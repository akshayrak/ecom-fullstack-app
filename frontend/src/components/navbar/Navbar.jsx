import "./navbar.css"
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";

const Navbar = ({toggleStatus}) => {
    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart

    const getCartCount = () =>{
        return cartItems.reduce((qty, item)=>Number(item.qty)+qty,0)
    }

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>

            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        {/* icon */}
                        <ShoppingCartIcon />
                        <span>
                            Cart
                            <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        {/* shop */}
                        Shop
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className="hamburger__menu" onClick={()=>toggleStatus(true)}>
                <MenuIcon className="hamburgerlogo__icon" />
            </div>
        </nav>
    )
}

export default Navbar
