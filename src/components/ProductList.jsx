import { useState } from 'react';
import products from '../products.json';
import {useDispatch} from "react-redux";
import { addToCart } from '../action.js';


function ProductList() {
    const [productList, setProductList] = useState(products);
    const dispatch = useDispatch()

    return (
        <div className="product-list">
            {productList.map((product) => (
                <div key={product.id}>
                    <div className="product-card">
                        <img src={product.picture} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Color: {product.color}</p>
                        <p>Description: {product.description}</p>
                        <p>Category: {product.category}</p>
                        <p>Tags: {product.tags.join(', ')}</p>
                        <button onClick={() => dispatch(addToCart(product))}>Купить</button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default ProductList;