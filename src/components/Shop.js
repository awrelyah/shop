import React, { useState } from 'react'
import '../style/shop.css'
import { products } from '../products'
import { clothes } from '../clothes'

function Shop() {
  const [activeItems, setActiveItems] = useState('footwear');

  function changeItems (el){
    setActiveItems(el);
  }

  const sneakerItems = products.map(product => {
    return <div className='item'>
      <div className='image'><img src={product.url} alt={product.name} className='item-pic'/></div>
      <h3>{product.name}</h3>
      <h3>EU {product.size}</h3>
      <button className='cart-btn'>Add To Cart</button>
      </div>
  })

  const clothesItems = clothes.map(item => {
    return <div className='item'>
      <div className='image'><img src={item.url} alt={item.name} className='item-pic'/></div>
      <h3>{item.name}</h3>
      <h3>{item.size}</h3>
      <button className='cart-btn'>Add To Cart</button>
      </div>
  })
  return (
    <div className='shop'>
      <div className='category'>
      <h2 onClick={() => changeItems('footwear')} className={activeItems === 'footwear' && 'active-items-link'} >Footwear</h2>
      <h2 onClick={() => changeItems('clothing')} className={activeItems === 'clothing' && 'active-items-link'}>Clothing</h2>
      </div>
      { activeItems === 'footwear' ?
        <div className='items'>
            {sneakerItems}
        </div>
        :
        <div className='items'>
          {clothesItems}
        </div>
      }

    </div>
  )
}

export default Shop