import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = {
    items: [],
    totalQuantity: 0,
}

const cartItemsSlice = createSlice({
    name:'itemsCounter es el listado de items con su cantidad',
    initialState: initialCartItemsState,
    reducers: {
        addItem(state, action){            
            const newItem = action.payload;
            console.log('producto ...Desde cartItemsSlice: ', newItem);
            state.totalQuantity++;
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === newItem.id
            );
            console.log('existingItemIndex: ', existingItemIndex);
            console.log('state.items: ', state.items);
            if(existingItemIndex === -1){                
                const item = {
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                 }
                console.log('item to add (push) = ', item);
                state.items.push(item);
            } else {
                
                const existingCartItem = state.items[existingItemIndex];
                const updateItems = [...state.items];
                
                const updatedItem = {
                    ...existingCartItem,
                    totalPrice: existingCartItem.totalPrice + newItem.price,
                    quantity: existingCartItem.quantity + 1,
                };
                updateItems[existingItemIndex] = updatedItem;
            }
        },
        removeItem(state, action){
            const id = action.payload;
            state.totalQuantity--;
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
                    totalPrice: existingCartItem.totalPrice - existingCartItem.price,
                    quantity: existingCartItem.quantity - 1,
                };
                updateItems[existingItemIndex] = updatedItem;
            }
        },
        clearCart(state){
            state = initialCartItemsState;
        }
    }
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;