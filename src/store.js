import { legacy_createStore as createStore } from 'redux'

import { combineReducers } from 'redux';
import cartReducer from './Reducer.js';

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;