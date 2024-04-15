import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCategory} from '../slices/categorySlice';

function SelectCategory({categories}) {
    const [ categoryFilter, setCategoryFilter ] = useState('All')

    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
      setCategoryFilter(e.target.value)
      dispatch(filterCategory(e.target.value))
    }

  return (
    <div 
    onChange={handleFilterChange}
    onKeyDown={handleFilterChange}
    tabIndex={0}
    role="button">
      <select id="category" value={categoryFilter}>
        {categories.map((category, index)=> <option key={index} value={category}>{category}</option>)}
      </select>
    </div>
  )
}

export default SelectCategory
