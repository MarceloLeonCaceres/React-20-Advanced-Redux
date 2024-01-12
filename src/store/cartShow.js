import { createSlice } from "@reduxjs/toolkit";

const initialCartShow = {
    visibleCart: false
}

const cartShowSlice = createSlice({
    name:'cartVisibility',
    initialState: initialCartShow,
    reducers: {
        toggleShow(state){
            state.visibleCart = !state.visibleCart;
        }
    }
});

export const cartShowActions = cartShowSlice.actions;

export default cartShowSlice.reducer;