import React, { useEffect, useState } from 'react'
import InventoryCard from './InventoryCard'
import styles from '../styles/InventoryItem.module.css';

function Inventory() {
  //need to get from the api and then i map out to return me an array of inventory cards
  const API_URL = 'https://dummyjson.com/products'

  const [ Inventory, setInventory] = useState([])

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

  return (
    <div className={styles.gridContainer}>
      {Inventory.map((single) => {
        return <InventoryCard key={single.id} item={single} />
      })}
    </div>
  )
}

export default Inventory
