import "./productScreen.css"
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"

import { getProductDetails } from "../../redux/actions/productActions"
import { addToCart} from "../../redux/actions/cartActions"

const ProductScreen = ({match,history}) => {

    const [qty, setQty] = useState(1);
    const dispatch=useDispatch();

    const productDetails = useSelector(state=> state.getProductDetails)

    const {loading,error, product} = productDetails

    useEffect(() => {
        if(product&&match.params.id!==product._id){
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch,product,match]);

    const addToCartHandler =()=>{
        dispatch(addToCart(product._id,qty))
        history.push("/cart")
    }


    return (
        <div className="productScreen">
            {loading?<h2>Loading...</h2>:error?<h2>{error}</h2>:
            (<>

           <div className="productscreen__left">
                <div className="left__image">
                    <img src={product.imageUrl} alt="someImg" />
                </div>
                <div className="left__info">
                    <p className="left__name">{product.name}</p>
                    <p className="">Price: ${product.price}</p>
                    <p className="">Description: {product.description}</p>
                </div>
            </div> 
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>${product.price}</span>
                    </p>
                    <p>
                        Status: {product.countInStock>0?<span>In Stock</span>:<span>Out Of Stock</span>}
                    </p>
                    <p>
                        Qty:
                        <select name="qty" value={qty} onChange={(e)=>setQty(e.target.value)}>
                            {
                                 Array.apply(null,{length:product.countInStock}).map((x,i)=><option key={i} value={i+1}>{i+1}</option>)
                                
                            }
                        </select>
                    </p>
                    <p>
                        <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                    </p>
                </div>
            </div>

            </>)}
        </div>
    )
}

export default ProductScreen
