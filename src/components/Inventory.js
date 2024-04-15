import React, { useEffect, useState } from 'react'
import InventoryCard from './InventoryCard'
import styles from '../styles/InventoryItem.module.css';
import SelectCategory from './SelectCategory';
import { useSelector } from 'react-redux';

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

  const categories = Inventory.map((item) => { return item.category})
  const uniqueCategories = [...new Set(categories)];
  uniqueCategories.push("All")

  const categoryFilter = useSelector((state) => state.categories.categoryFilter)

  const filteredInventory = categoryFilter !== 'All' ? Inventory.filter((prev)=> prev.category === categoryFilter) : Inventory;

  return (
    <div>
      <div className={styles.category}>
        <p className={styles.categoryTitle}>Filter By Category</p>
        <SelectCategory categories = {uniqueCategories} />
      </div>
      <div className={styles.gridContainer}>
        {filteredInventory.map((single) => {
          return <InventoryCard key={single.id} item={single} />
        })}
      </div>
    </div>
  )
}

export default Inventory
