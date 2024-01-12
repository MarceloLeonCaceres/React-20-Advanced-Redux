import { configureStore } from '@reduxjs/toolkit';

import cartButtonCounterReducer from './cartButtonCounter.js';

import itemsCounterReducer from './itemsCounter.js';

const store = configureStore({
    reducer: {
        cartCounter: cartButtonCounterReducer,
        itemsCounter: itemsCounterReducer,
    },  
});

export default store;