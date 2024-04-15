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
    addCart: (state, action) => {
      const newOrder = {id: action.payload.id, item: action.payload.item.title, qty: action.payload.Quantity, price: action.payload.item.price, totalPrice: action.payload.totalPrice, thumbnail: action.payload.item.thumbnail}

      state.cart.push(newOrder)

      const cart = window.localStorage.getItem('cart')
      if (cart) {
        const cartArr =  JSON.parse(cart);
        cartArr.push(newOrder)
        window.localStorage.setItem('cart', JSON.stringify(cartArr))
      } else {
        window.localStorage.setItem('cart', JSON.stringify([newOrder]))
      }
    },
    deleteCart: (state, action) => {
      const cart = window.localStorage.getItem('cart') 
      if (cart) {
        const cartArr =  JSON.parse(cart);
        const editedcartArr = cartArr.filter((prev)=> prev.id !== action.payload)
        window.localStorage.setItem('cart', JSON.stringify(editedcartArr))
        state.cart.filter((prev)=> prev.id !== action.payload)
      }
    },
    submitCart: (state, action) => {
      const cart = window.localStorage.getItem('cart')
      if (cart) {
        state.cart = [];
        window.localStorage.setItem('cart', JSON.stringify([]))
      }
    }
  }
})

export default cartSlice.reducer;
//To export reducers later ready for dispatch
export const { addCart } = cartSlice.actions;
export const { deleteCart } = cartSlice.actions;
export const { submitCart } = cartSlice.actions;