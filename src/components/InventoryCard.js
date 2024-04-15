import React, { useState } from 'react'
import styles from '../styles/InventoryItem.module.css'
import Button from './Button'
import AddtoCartModal from './AddtoCartModal'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

function InventoryCard({ item }) {
  const [ modal, setModal ] = useState(false)

  const CartList = useSelector((state) => state.cart.cart)
  const findOrder = CartList.find((order)=> order.item === item.title)

  const handleClick = () => {
    if (findOrder) {
      toast.error("You have added this item before. To adjust quantity, go to the cart to adjust")
    } else {
    setModal(true)
    }
  }

  return (
    <div>
      <div className={styles.card}>
        <img className={styles.imageThumbnail} src={item.thumbnail} alt={item.title}/>
        <div>
          <p>{item.title}</p>
          <p>$ {item.price}</p>
          <div onClick={handleClick}
                onKeyDown={handleClick}
                tabIndex={0}
                role="button">
            <Button className={styles.AddtoCartButton}>Add To Cart</Button>
          </div>
        </div>
      </div>
      <AddtoCartModal modal={modal} setModal={setModal} item={item} />
    </div>
  )
}

export default InventoryCard
