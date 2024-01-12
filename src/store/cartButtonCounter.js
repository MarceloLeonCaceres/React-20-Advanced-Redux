import { createSlice } from '@reduxjs/toolkit';

const initialCartButtonCounterState = { cartCounter: 0};

const cartButtonCounterSlice = createSlice({
    name: 'este name cartCounter no es importante',
    initialState: initialCartButtonCounterState,
    reducers: {
        increment(state){
            state.cartCounter++;
        },
    }
});

export const cartButtonCounterActions = cartButtonCounterSlice.actions;

export default cartButtonCounterSlice.reducer;