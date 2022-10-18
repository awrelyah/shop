import React from 'react'
import '../style/shoppingCart.css'

function ShoppingCart({cartItems}) {
  const items = cartItems.map((item) => {
    return <div className='cart-item'>
      <div><img src={item.url} alt={item.name}/></div>
      <div className='item-name'>{item.name}</div>
      <div>{item.size}</div>
      <div><button>+</button><span>1</span><button>-</button></div>
      <div>remove</div>
      <div>{item.price} EUR</div>
    </div>
  })
  return (
    <div className='shopping-cart'>
      <h1>Your Bag</h1>
      {cartItems.length > 0 ? 
        <div className='cart'>
          <div className='cart-items'>
            <div className='titles'>
              <div className='item-description'>item description</div>
              <div>size</div>
              <div>quantity</div>
              <div>remove</div>
              <div>price</div>
            </div>
            {items}
          </div>
          <div className='total'>
            total
          </div>
            <div className='buttons'>
              <input placeholder='Please enter promo code'/> 
              <button>Apply Discount</button>
              <button>Checkout</button>
            </div>
        </div>
        :
        <div>Your cart is empty!</div>
    }
    </div>
  )
}

export default ShoppingCart