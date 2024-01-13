import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = {
    items: [],
    totalQuantity: 0,
};

const cartItemsSlice = createSlice({
    name:'items es el listado de articulos en el cart, con su respectiva cantidad',
    initialState: initialCartItemsState,
    reducers: {
        addItem(state, action){            
            const newItem = action.payload;
            state.totalQuantity++;
            const existingCartItem = state.items.find((item) => item.id === newItem.id);
            if(!existingCartItem){                
                const item = {
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                 }                 
                state.items.push(item);
            } else {     
                existingCartItem.quantity++;
                existingCartItem.totalPrice = existingCartItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action){
            const id = action.payload;
            state.totalQuantity--;
            const existingCartItem = state.items.find((item) => item.id === id);
            if(existingCartItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingCartItem.quantity--;
                existingCartItem.totalPrice = existingCartItem.totalPrice - existingCartItem.price;
            }
        },
        clearCart(state){
            state = initialCartItemsState;
        }
    }
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;