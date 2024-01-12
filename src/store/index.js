import { configureStore } from '@reduxjs/toolkit';

import cartButtonCounterReducer from './cartButtonCounter.js';

import cartItemsReducer from './cartItems.js';

const store = configureStore({
    reducer: {
        cartCounter: cartButtonCounterReducer,
        cartItems: cartItemsReducer,
    },  
});

export default store;