import React, { useState } from 'react';
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
import CurrencyFilterModal from './CurrencyFilterModal';

function AppHeader() {
  const [ currencyModal, setCurrencyModal ] = useState(false)

  const handleCurrencyFilter = () => setCurrencyModal(true)

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Welcome to Koko Mart</h1>
        </div>
        <div className={styles.cartIcons}>

          <div className={styles.cartIcon}>
            <div className={styles.iconContainer}
            onClick={handleCurrencyFilter}
            onKeyDown={handleCurrencyFilter}
            tabIndex={0}
            role="button">
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
      <CurrencyFilterModal CurrencyModal={currencyModal} setCurrencyModal={setCurrencyModal} />
    </div>
  )
}

export default AppHeader
