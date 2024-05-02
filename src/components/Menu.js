import React from 'react'
import MenuItem from './MenuItem.js';

function Menu({setOrder}) {

    let menu = [
        {name: 'tacos', price: 7.89, spicyRating: 2},
        {name: 'eggs', price: 6.66, spicyRating: 1},
        {name: 'enchiladas', price: 10.00, spicyRating: 3},
        {name: 'phở', price: 9.99, spicyRating: 4},
        {name: 'pizza', price: 12.50, spicyRating: 1},
        {name: 'sushi', price: 15.99, spicyRating: 1},
        {name: 'curry', price: 11.75, spicyRating: 3},
        {name: 'burger', price: 8.99, spicyRating: 1},
        {name: 'pad thai', price: 10.50, spicyRating: 2},
        {name: 'ramen', price: 11.25, spicyRating: 3}
    ];

    const showMenuItems = menu.map(food => <MenuItem food={food} setOrder={setOrder}/>)

    return (
        <div className='menu'>
            <h2>Our menu</h2>
            {showMenuItems}
        </div>
    )
}

export default Menu