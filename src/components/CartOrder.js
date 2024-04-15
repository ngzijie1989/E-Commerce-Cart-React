import React, { useState, useEffect } from 'react';
import styles from '../styles/CartList.module.css';
import IndexButton from './IndexButton';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../slices/cartSlice';

function CartOrder({ order, cartTotalPrice, setCartTotalPrice }) {
  const [Quantity , setQuantity] = useState(order.qty)
  const [totalPrice , setTotalPrice] = useState(order.totalPrice)
  const [ Inventory, setInventory] = useState([])
  const [ stock, setStock ] = useState()

  const dispatch = useDispatch();

  const currencyString = useSelector((state) => state.currencyFilter.currencyFilter)
  const currency = JSON.parse(currencyString)
  const currencyType = currency.currency
  const currencyMultiplier = currency.multiplier

  const API_URL = 'https://dummyjson.com/products'

  useEffect(() => {
    fetchData(API_URL)
  },[])

  const fetchData = (API_URL) => {
      fetch(API_URL)
      .then((response)=> response.json())
      .then((data) => {
        setInventory(data.products)
      })
  }

  useEffect(() => {
    const single = Inventory.find(item => item.title === order.item);
    if (single) {
      setStock(single.stock - order.qty);
    }
  }, [Inventory]);

  const handleDecrement = () => { if (Quantity > 1 ) {setQuantity((prev) => {const newQuantity = prev - 1; setTotalPrice(newQuantity * order.price); return newQuantity}); 
  setStock((prev) => prev + 1); ; setCartTotalPrice((prev)=> { return prev - order.price})
} 
  else { 
    toast.error('Minimum to add is 1')
  }}

 const handleIncrement = () => {
  if ( stock > 0  ) {setQuantity((prev) => {const newQuantity = prev + 1; setTotalPrice(newQuantity * order.price); return newQuantity}); setStock((prevS) => prevS - 1); setCartTotalPrice((prev)=>  { return prev + order.price}) } 
  else { 
    toast.error('There is insufficient stock to add to your cart')
  }
 }

 const handleDelete = (e) => {
  e.preventDefault();
  dispatch(deleteCart(order.id));
  window.location.reload();
  toast.success(`Item has been removed from cart`)
 }

  return (
      <div className={styles.orderContainer}>
        <div className={styles.trashIcon}
                      onClick={handleDelete}
                      onKeyDown={handleDelete}
                      tabIndex={0}
                      role="button">
          <FontAwesomeIcon icon={faTrash} />
        </div>

        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={order.thumbnail} alt={order.item}/>
          </div>

          <div className={styles.orderInfo}>
            <p><strong>Order: #{order.id}</strong></p>
            <p>Item: {order.item}</p>
            <p>Unit Price: {currencyType} ${(order.price*currencyMultiplier).toFixed(2)}</p>
            <p>Quantity: {Quantity}</p>
          </div>
        </div>

        <div className={styles.QuantityContainer}>
          <div>
            <p className={styles.QuantityTitle}>Quantity</p>
          </div>

          <div>
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

          <div>
            <p className={styles.stock}><em>Max to add: {stock}</em></p>
          </div>
        </div>


        <div className={styles.totalPrice}>
        <p><strong>{currencyType} ${(order.price*Quantity*currencyMultiplier).toFixed(2)}</strong></p>
        </div>
      </div>
  )
}

export default CartOrder
