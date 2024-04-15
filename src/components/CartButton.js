import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import styles from '../styles/CartIcon.module.css';

function CartButton() {
  const CartQty = useSelector((state) => state.cart.cart.length)

  return (
    <div className={styles.iconContainer}>
      <FontAwesomeIcon icon={faCartShopping} />
      <div className={styles.qty}>
        {CartQty}
      </div>
    </div>
  )
}

export default CartButton
