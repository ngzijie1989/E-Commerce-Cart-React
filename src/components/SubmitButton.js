import React from 'react'
import styles from '../styles/submitButton.module.css'

function SubmitButton({children}) {
  return (
    <div > 
      <button className={styles.button}>{children}</button>
    </div>
  )
}

export default SubmitButton
