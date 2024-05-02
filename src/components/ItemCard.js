import React from 'react'

function ItemCard({item}) {
  return (
    <div>
      <h2>{item.name} | ${item.price}</h2>
    </div>
  )
}

export default ItemCard