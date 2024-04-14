import React from 'react';
import CartButton from './CartButton';
import styles from '../styles/AppHeader.module.css';

function AppHeader() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome to Koko Mart</h1>
      </div>
      <div className={styles.cartIcon}>
        <CartButton />
      </div>
    </div>
  )
}

export default AppHeader
