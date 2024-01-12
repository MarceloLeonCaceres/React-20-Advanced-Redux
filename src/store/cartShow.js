import { createSlice } from "@reduxjs/toolkit";

const initialCartShow = {
    cartIsVisible: false
}

const cartShowSlice = createSlice({
    name:'cartVisibility',
    initialState: initialCartShow,
    reducers: {
        toggleShow(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const cartShowActions = cartShowSlice.actions;

export default cartShowSlice.reducer;