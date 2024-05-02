import React from 'react'

function MenuItem({food, setOrder}) {

    const addToOrder = () => {
        setOrder(prev => ([...prev, food]))
    }
    

  return (
    <div style={{border: `solid 2px ${food.spicyRating > 3 ? 'red' : 'green'}`}}>
        <h5>{food.name} | {food.price}</h5>
        <h6>Spice level: {food.spicyRating}</h6>
        <button onClick={addToOrder}>Add to Order</button>
    </div>
  )
}

export default MenuItem