export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};

export const updateCartCount = (count) => {
    return {
        type: 'UPDATE_CART_COUNT',
        payload: count,
    };
};