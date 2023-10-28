import { useSelector } from 'react-redux';

function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const cartCount = useSelector((state) => state.cart.cartCount);

    return (
        <div className='cart'>
            <h1>Корзина</h1>
            <p>Товаров в корзине: {cartCount}</p>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <p>Category: {product.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;