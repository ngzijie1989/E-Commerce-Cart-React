import React from 'react'
import OrderCardItem from './OrderCardItem'
import styles from '../styles/OrderCard.module.css';

function OrderCard({ order }) {
  return (
    <div className={styles.orderContainer}>
      <div>
        <p className={styles.orderID}>Order ID: <strong> {order.orderId}</strong></p>
        <p className={styles.orderID}>Total Paid:<strong> {order.currency} ${order.totalPrice}</strong></p>
        <div className={styles.itemsPurchased}>
          <p>Items purchased:</p>
          {order.orderList.map((item, index)=> <OrderCardItem key={item.id} item={item} index={index} />)}
        </div>
      </div>
    </div>
  )
}

export default OrderCard
