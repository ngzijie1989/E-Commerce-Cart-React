import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'
import orderReducer from './slices/orderSlice';
import categoriesReducer from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    categories: categoriesReducer
  },
});

export default store;