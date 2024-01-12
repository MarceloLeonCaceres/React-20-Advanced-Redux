import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = {
    items: []
}

const cartItemsSlice = createSlice({
    name:'itemsCounter es el listado de items con su cantidad',
    initialState: initialCartItemsState,
    reducers: {
        addItem(state, product){      
            console.log('producto ...Desde cartItemsSlice: ', product);
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === product.payload.id
            );
            console.log('existingItemIndex: ', existingItemIndex);
            console.log('state.items: ', state.items);
            if(existingItemIndex === -1){                
                const item = {...product.payload.producto, quantity: 1, total: product.payload.producto.price }
                console.log('item = ', item);
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
            state = initialCartItemsState;
        }
    }
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;