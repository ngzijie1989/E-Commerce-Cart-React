import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageCart = () => {
  const orders = window.localStorage.getItem('orders')
  if (orders) {
    return JSON.parse(orders);
  } else {
    window.localStorage.setItem('orders', JSON.stringify([]));
    return [];
  }
}

const initialValue = {
  orders: getLocalStorageCart(),
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialValue,
  reducers: {
    addOrder: (state,action) => {
      const orders = window.localStorage.getItem('orders')
      if ( orders) {
        const ordersArr = JSON.parse(orders)
        ordersArr.push(action.payload)
        state.orders.push(action.payload)
        window.localStorage.setItem('orders', JSON.stringify(ordersArr));
      } else {
        state.orders.push(action.payload)
        window.localStorage.setItem('orders', JSON.stringify([action.payload]));
      }
    }
  }
})

export default ordersSlice.reducer;
export const { addOrder } = ordersSlice.actions;