import { configureStore } from '@reduxjs/toolkit';

import cartCounterReducer from './cartCounter.js';

const store = configureStore({
    reducer: {
        cartCounter: cartCounterReducer,
    },  
});

export default store;