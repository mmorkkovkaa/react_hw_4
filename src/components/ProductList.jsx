import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart, updateCartCount } from '../action.js';

function ProductList( ) {
    const [productList, setProductList] = useState([]);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(updateCartCount(cartCount + 1));
    };

    useEffect(() => { axios.get('https://dummyjson.com/products?limit=10&skip=10')
            .then((response) => {
                setProductList(response.data.products);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="product-list">
            {productList.map((product) => (
                <div key={product.id}>
                    <div className="product-card">
                        <img src={product.thumbnail} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <p>{product.discountPercentage}</p>
                        <p>Description: {product.description}</p>
                        <p>Category: {product.category}</p>
                        <p>{product.rating}</p>
                        <button onClick={() => handleAddToCart(product)}>Купить</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;