import { createSlice } from '@reduxjs/toolkit';

const initialCarCounterState = { cartCounter: 0};

const cartCounterSlice = createSlice({
    name: 'este name cartCounter no es importante',
    initialState: initialCarCounterState,
    reducers: {
        increment(state){
            state.cartCounter++;
        },
    }
});

export const cartCounterActions = cartCounterSlice.actions;

export default cartCounterSlice.reducer;