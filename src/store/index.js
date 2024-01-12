import { configureStore } from '@reduxjs/toolkit';

import cartButtonCounterReducer from './cartButtonCounter.js';

import cartItemsReducer from './cartItems.js';

import cartShowReducer from '../store/cartShow.js';

const store = configureStore({
    reducer: {
        cartCounter: cartButtonCounterReducer,
        cartItems: cartItemsReducer,
        cartShow: cartShowReducer
    },  
});

export default store;