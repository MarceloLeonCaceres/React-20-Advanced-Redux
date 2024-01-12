import { createSlice } from "@reduxjs/toolkit";

const initialItemsCounterState = {
    items: []
}

const itemsCounterSlice = createSlice({
    name:'itemsCounter es el listado de items con su cantidad',
    initialState: initialItemsCounterState,
    reducers: {
        addItem(state, product){            
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === product.id
            );
            if(existingItemIndex === -1){                
                const item = {...product, quantity: 0, total: 0 }
                state.items.push(item);
            } else {
                
                const existingCartItem = state.items[existingItemIndex];
                const updateItems = [...state.items];
                
                const updatedItem = {
                    ...existingCartItem,
                    total: (existingCartItem.quantity + 1) * 1,
                    quantity: existingCartItem.quantity + 1,
                };
                updateItems[existingItemIndex] = updatedItem;
            }
        },
        removeItem(state, id){
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === id
            );
            const existingCartItem = state.items[existingItemIndex];
            const updateItems = [...state.items];

            if(existingCartItem.quantity === 1){
                updateItems.splice(existingItemIndex, 1);
            } else {
                const updatedItem = {
                    ...existingCartItem,
                    total: (existingCartItem.quantity - 1) * 1,
                    quantity: existingCartItem.quantity - 1,
                };
                updateItems[existingItemIndex] = updatedItem;
            }

        },
        clearCart(state){
            state = initialItemsCounterState;
        }
    }
});

export const itemsCounterActions = itemsCounterSlice.actions;

export default itemsCounterSlice.reducer;