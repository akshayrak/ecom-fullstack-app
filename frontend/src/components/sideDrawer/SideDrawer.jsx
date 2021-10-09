import ShoppingCart from '@mui/icons-material/ShoppingCart'
import React from 'react'
import { Link } from 'react-router-dom'
import "./sideDrawer.css"

const SideDrawer = ({show, toggleStatus}) => {
    const sideDrawerClass=["sideDrawer"]
    show&&sideDrawerClass.push("show")
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sideDrawer__links" onClick={()=>toggleStatus(false)} >
                <li>
                    <Link to="/cart">
                        <ShoppingCart />
                        <span>
                            Cart <span className="sideDrawer__cartbadge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span>
                            Shop 
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
