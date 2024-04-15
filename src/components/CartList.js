import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartOrder from './CartOrder'
import styles from "../styles/CartList.module.css";
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';
import { submitCart } from '../slices/cartSlice';
import { addOrder } from '../slices/orderSlice';
import { v4 as uuid } from 'uuid';

function CartList() {
  const dispatch = useDispatch();
  const cartList = useSelector((state)=> state.cart.cart)
  console.log(cartList)
  // const [totalPrice, setTotalPrice] =useState
  const pricePerOrderArr = cartList.map((order)=> order.totalPrice)
  const total = pricePerOrderArr.reduce((a, c)=> {
    return a + c
  },0)
  const [cartTotalPrice ,setCartTotalPrice ] = useState(total)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitCart())
    const id = uuid();
    dispatch(addOrder({orderId: id, orderList: cartList, totalPrice: cartTotalPrice}))
    toast.success('Your purchase has been successful. Thank you for your order!')
  }

  return (
    <div className={styles.ordersContainer}>
      <h1>Your Cart</h1>
      {cartList.length === 0 ? (
        "You do not have any item in your cart currently"
      ) : (
        <>
          {cartList.map((order) => {
            return <CartOrder key={order.id} order={order} cartTotalPrice={cartTotalPrice} setCartTotalPrice={setCartTotalPrice}  />;
          })}
          <div
            onClick={handleSubmit}
            onKeyDown={handleSubmit}
            tabIndex={0}
            role="button"
            className={styles.addMinus}
          >
            <p className={styles.totalPrice}>Total Price: ${cartTotalPrice}</p>
            <SubmitButton>Submit Cart</SubmitButton>
          </div>
        </>
      )}
    </div>
  );

}

export default CartList
