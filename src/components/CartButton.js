import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartButton() {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  )
}

export default CartButton
