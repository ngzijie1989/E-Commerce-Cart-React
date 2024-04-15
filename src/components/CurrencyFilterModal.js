import React, { useState } from 'react'
import styles from '../styles/CurrencyModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { filterCurrency } from '../slices/currencyFilterSlice'

function CurrencyFilterModal({ setCurrencyModal, CurrencyModal }) {
  const initialValue = JSON.stringify({ currency: 'SGD', multiplier: 1 })
  const [ currencyFilter, setcurrencyFilter ] = useState(initialValue)
  const [ activeButton, setActiveButton ] = useState('SGD')

  const dispatch = useDispatch();

  const handleCancel = () => setCurrencyModal(false)

  const handleCurrency = (e) => {
    setActiveButton(JSON.parse(e.currentTarget.getAttribute('data-value')).currency);
    setcurrencyFilter(e.currentTarget.getAttribute('data-value'))
  }

  const handleCurrencySubmit = () => {
    dispatch(filterCurrency(currencyFilter))
    setCurrencyModal(false)
    toast.success(`Currency denomination has been changed to ${JSON.parse(currencyFilter).currency}`)
  }

  return (
    CurrencyModal &&
    (<div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton} 
                onClick={handleCancel}
                onKeyDown={handleCancel}
                tabIndex={0}
                role="button">
            <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className={styles.currencyContainer}>
          <div>
            <h3>Select Preferred Currency</h3>
          </div>

          <div >
            <div onClick={handleCurrency}
                onKeyDown={handleCurrency}
                tabIndex={0}
                role="button"
                data-value= {JSON.stringify({ currency: 'SGD', multiplier: 1 })}>
              <button className={activeButton === 'SGD' ? styles.currencyFilterActive : styles.currencyFilter}>Singapore Dollar SGD</button>
            </div>

            <div onClick={handleCurrency}
                onKeyDown={handleCurrency}
                tabIndex={0}
                role="button"
                data-value= {JSON.stringify({ currency: 'MYR', multiplier: 3.51 })}>
              <button className={activeButton === 'MYR' ? styles.currencyFilterActive : styles.currencyFilter}>Malaysian Ringgit MYR</button>
            </div>

            <div onClick={handleCurrency}
                onKeyDown={handleCurrency}
                tabIndex={0}
                role="button"
                data-value= {JSON.stringify({ currency: 'AUD', multiplier: 1.134 })}>
              <button className={activeButton === 'AUD' ? styles.currencyFilterActive : styles.currencyFilter}>Australian Dollar AUD</button>
            </div>

            <div onClick={handleCurrencySubmit}
                onKeyDown={handleCurrencySubmit}
                tabIndex={0}
                role="button"
                >
              <button className={styles.submitButton}>Adjust Currency</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
  )
}

export default CurrencyFilterModal
