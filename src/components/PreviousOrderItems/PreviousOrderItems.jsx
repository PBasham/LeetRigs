import React from 'react'

export default function PreviousOrderItems({ orderItem }) {

  return (
    <>
      Ordered on: {orderItem.item.createdAt}
    <div className='order-item-name'>
      {orderItem.item.title}
    </div>
      <div className='order-item-price'>
        ${orderItem.item.price}
      </div>
      <div>
        <img className='order-item-pic' src={orderItem.item.image} alt="itempic" />
      </div>
      </>
  )
}
