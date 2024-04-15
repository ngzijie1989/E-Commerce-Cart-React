import React from 'react'
import { useSelector } from 'react-redux'
import OrderCard from './OrderCard'
import styles from "../styles/CartList.module.css";

function ConfirmedOrders() {
  const orders = useSelector((state)=> state.orders.orders)
  
  return (
    <div>
      <h1>Your Purchases</h1>
      <div className={styles.ordersContainer}>
        {orders.map((order) => {
          return <OrderCard key={order.id} order={order} />
        })}
      </div>
    </div>
  )
}

export default ConfirmedOrders
