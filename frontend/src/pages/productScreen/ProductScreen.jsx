import "./productScreen.css"

const ProductScreen = () => {
    return (
        <div className="productScreen">
           <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="someImg" />
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p className="">Price: $499.99</p>
                    <p className="">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi aut dolores ipsam non soluta est blanditiis, eligendi cum impedit
                     laudantium odio exercitationem suscipit veniam eveniet culpa maxime distinctio consequuntur.</p>

                </div>
            </div> 
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty:
                        <select name="qty" id="qty">
                            <option value="1">1</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
