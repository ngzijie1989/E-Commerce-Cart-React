import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/CartIcon.module.css';

function HomeButton() {
  return (
    <div className={styles.iconContainer}>
    <FontAwesomeIcon icon={faHouse} />
    </div>
  )
}

export default HomeButton
