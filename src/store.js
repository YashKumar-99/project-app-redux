import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Feature/Cart';
import modelReducer from './Feature/Model'


const store = configureStore({
    reducer: {
        cart: cartReducer,
        model:modelReducer

        // cartb: null
    }
});
export default store;