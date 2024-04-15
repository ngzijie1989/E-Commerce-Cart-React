import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageCart = () => {
  const cart = window.localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(cart);
  } else {
    window.localStorage.setItem('cart', JSON.stringify([]));
    return [];
  }
}

const initialValue = { 
  cart: getLocalStorageCart(),
}


export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers : {
    addOrder: (state, action) => {
      const newOrder = {id: action.payload.id, item: action.payload.item.title, qty: action.payload.Quantity, price: action.payload.item.price, totalPrice: action.payload.totalPrice, thumbnail: action.payload.item.thumbnail}
      console.log(newOrder)

      state.cart.push(newOrder)

      const cart = window.localStorage.getItem('cart')
      if (cart) {
        const cartArr =  JSON.parse(cart);
        cartArr.push(newOrder)
        window.localStorage.setItem('cart', JSON.stringify(cartArr))
      } else {
        window.localStorage.setItem('cart', JSON.stringify([newOrder]))
      }
    }
  }
})

export default cartSlice.reducer;
//To export reducers later ready for dispatch
export const { addOrder } = cartSlice.actions;