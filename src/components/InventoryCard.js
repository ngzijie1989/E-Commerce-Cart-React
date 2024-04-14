import React, { useState } from 'react'
import styles from '../styles/InventoryItem.module.css'
import Button from './Button'
import AddtoCartModal from './AddtoCartModal'

function InventoryCard({ item }) {
  const [ modal, setModal ] = useState(false)

  const handleClick = () => {
    setModal(true)
    console.log(modal)
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
