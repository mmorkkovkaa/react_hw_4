const initialState = {
    cart: [],
    cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                cartCount: state.cartCount + 1,
            };
        case 'UPDATE_CART_COUNT':
            return {
                ...state,
                cartCount: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;