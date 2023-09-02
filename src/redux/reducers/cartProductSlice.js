import { createSlice } from '@reduxjs/toolkit'

export const cartProductSlice = createSlice({
    name: 'cartProductSlice',
    initialState: {
        cartproducts: [],
        cartProductId: [],
    },
    reducers: {
        addCartProducts: (state, action) => {
            if (!state.cartProductId.includes(action.payload.id)) {
                state.cartProductId.push(action.payload.id);
                state.cartproducts.push(action.payload);
            }
        },
        removeCartProducts: (state, action) => {
            state.cartproducts = state.cartproducts.filter(product => product.id !== action.payload.id);
            state.cartProductId = state.cartProductId.filter(id => id !== action.payload.id);
        },
    }


})



export const { addCartProducts, removeCartProducts } = cartProductSlice.actions;

export default cartProductSlice.reducer;