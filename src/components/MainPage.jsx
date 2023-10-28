import '../App.css';
import ProductList from "./ProductList.jsx";
import {useState} from "react";

function App() {

    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (product) => {
        setCart([...cart, product]);
        setCartCount(cartCount + 1);
    };



    return (
        <div className="App">
            <h1>Список товаров</h1>
            <ProductList addToCarts={addToCart} />
        </div>
    );
}

export default App;