import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'
import orderReducer from './slices/orderSlice';
import categoriesReducer from './slices/categorySlice';
import currencyFilterReducer from './slices/currencyFilterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    categories: categoriesReducer,
    currencyFilter: currencyFilterReducer
  },
});

export default store;