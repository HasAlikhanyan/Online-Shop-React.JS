import { configureStore } from '@reduxjs/toolkit';
import cartProductReducer from '../redux/reducers/cartProductSlice';

const store =  configureStore({
    reducer: {
        cartProducts: cartProductReducer,
    }
})

export {store};