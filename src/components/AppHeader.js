import React from 'react';
import CartButton from './CartButton';
import HomeButton from './HomeButton';
import ConfirmButtonIcon from './ConfirmButtonIcon';
import styles from '../styles/AppHeader.module.css';
import { Link } from 'react-router-dom';
import CartList from './CartList';
import Inventory from './Inventory';
import { Outlet } from 'react-router-dom';
import ConfirmedOrders from './ConfirmedOrders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function AppHeader() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Welcome to Koko Mart</h1>
        </div>
        <div className={styles.cartIcons}>

          <div className={styles.cartIcon}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
          </div>

          <div className={styles.cartIcon}>
            <Link to="/" element={ < Inventory/>}>
              <HomeButton /> 
            </Link>
          </div>

          <div className={styles.cartIcon}>
            <Link to="/cart" element={ < CartList/>}>
              <CartButton /> 
            </Link>
          </div>

          <div className={styles.cartIcon}>
            <Link to="/confirmed-purchases" element={ < ConfirmedOrders/>}>
              <ConfirmButtonIcon /> 
            </Link>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default AppHeader
