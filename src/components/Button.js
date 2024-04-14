import React from 'react'
import styles from '../styles/InventoryItem.module.css'

function Button({children, className}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Button
