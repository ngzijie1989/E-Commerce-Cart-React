import React, { useState } from 'react'
import styles from '../styles/AddToCartModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus, faPlus, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import Button from './Button'
import { addOrder } from '../slices/cartSlice'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import IndexButton from './IndexButton'

function AddtoCartModal({ modal, setModal, item }) {
  const [ Quantity, setQuantity ] = useState(1)
  const [ stock, setStock ] = useState(item.stock)
  const [ totalPrice, setTotalPrice ] = useState(item.price)
  const [ itemIndex, setItemIndex ] = useState(0)

  const dispatch = useDispatch();

  const handleCancel = () => setModal(false)
  const handleIncrement = () => { if (stock > 0  ) {setQuantity((prev) => {const newQuantity = prev + 1; setTotalPrice(newQuantity * item.price); return newQuantity}); setStock((prevS) => prevS - 1)} 
  else { 
    toast.error('There is insufficient stock to add to your cart')
  }}

  const handleDecrement = () => { if (Quantity > 1 ) {setQuantity((prev) => {const newQuantity = prev - 1; setTotalPrice(newQuantity * item.price); return newQuantity}); setStock((prev) => prev + 1)} 
  else { 
    toast.error('Minimum to add is 1')
  }}

  const handleDecrementIndex = () => {
    if (itemIndex > 0) {
      setItemIndex((prev) => prev - 1)
    } 
  }

  const handleIncrementIndex = () => {
    const maxIndex = item.images.length - 1
    if (itemIndex < maxIndex ) {
      setItemIndex((prev) => prev + 1)
    } 
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    dispatch(addOrder({item, Quantity, totalPrice, id }))
    setModal(false)
    // cause a shake in the cart
    toast.success(`A total of ${Quantity} of this item has been added to your cart`)
  }



  return (
    modal && (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton} 
              onClick={handleCancel}
              onKeyDown={handleCancel}
              tabIndex={0}
              role="button">
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <div>
          <div className={styles.title}>
          <h3>Add item to Cart</h3>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={item.images[itemIndex]} alt={item.title}/>
            <div onClick={handleDecrementIndex}
                onKeyDown={handleDecrementIndex}
                tabIndex={0}
                role="button" 
                className={styles.leftArrow}>
              <FontAwesomeIcon icon={faLeftLong} />
            </div>
            <div onClick={handleIncrementIndex}
                onKeyDown={handleIncrementIndex}
                tabIndex={0}
                role="button" 
                className={styles.rightArrow}>
              <FontAwesomeIcon icon={faRightLong} />
            </div>
          </div>

          <div className={styles.modalContent}>
            <span>Item: {item.title}</span>
            <span>Stock available: {stock}</span>
            <span>Price: ${item.price}</span>
            <span>Quantity:

              <div className={styles.inline}>
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
                
            </span>
            <span>Total Price: ${totalPrice}</span>
          </div>

          <div onClick={handleSubmit}
                onKeyDown={handleSubmit}
                tabIndex={0}
                role="button"
                className={styles.addMinus}>
            <Button className={styles.AddtoCartButton}>Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
    )
  )
}

export default AddtoCartModal
