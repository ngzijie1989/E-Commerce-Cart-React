import React from 'react'
import styles from '../styles/OrderCard.module.css';

function OrderCardItem({item, index}) {
  return (
    <div>
      <p>{index+1}) {item.item} --- Qty: {item.qty}</p> 
    </div>
  )
}

export default OrderCardItem
