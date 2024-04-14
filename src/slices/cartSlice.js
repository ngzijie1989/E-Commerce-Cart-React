import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers : {
    //To add
  }
})

export default cartSlice.reducer;
//To export reducers later ready for dispatch