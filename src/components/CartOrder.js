import React, { useState } from 'react';
import styles from '../styles/CartList.module.css';
import IndexButton from './IndexButton';

function CartOrder({ order }) {
  const [quantity , setQuantity] = useState(order.qty)
  return (
      <div className={styles.orderContainer}>
        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={order.thumbnail} alt={order.item}/>
          </div>

          <div className={styles.orderInfo}>
            <p><strong>Order: #{order.id}</strong></p>
            <p>Item: {order.item}</p>
            <p>Unit Price: ${order.price}</p>
            <p>Quantity: {order.qty}</p>
          </div>
        </div>

        <div className={styles.Qty}>
        <div>
          <div onClick={handleDecrement}
          onKeyDown={handleDecrement}
          tabIndex={0}
          role="button"
          className={styles.addMinus}>
            <IndexButton>minus</IndexButton>
            </div> 

          {Quantity} 

          <div onClick={handleIncrement}
          onKeyDown={handleIncrement}
          tabIndex={0}
          role="button"
          className={styles.addMinus}>
            <IndexButton>plus</IndexButton>
            </div>
        </div>

        </div>


        <div className={styles.totalPrice}>
        <p><strong>${order.totalPrice}</strong></p>
        </div>
      </div>
  )
}

export default CartOrder
