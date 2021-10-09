import Product from "../../components/product/Product"
import "./homeScreen.css"

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default HomeScreen
