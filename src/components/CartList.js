import React from 'react'
import { useSelector } from 'react-redux'
import CartOrder from './CartOrder'
import styles from "../styles/CartList.module.css";

function CartList() {
  const cartList = useSelector((state)=> state.cart.cart)
  console.log(cartList)

  return (
    <div className={styles.ordersContainer}>
      {cartList.map((order)=> {
        return <CartOrder key={order.id} order={order} />
      })}
    </div>
  )
}

export default CartList
