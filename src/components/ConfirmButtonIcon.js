import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/CartIcon.module.css';

function ConfirmButtonIcon() {
  return (
    <div className={styles.iconContainer}>
      <FontAwesomeIcon icon={faBagShopping} />
    </div>
  )
}

export default ConfirmButtonIcon
