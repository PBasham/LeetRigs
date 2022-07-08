import "../../index.css"
import "./CartLineItems.css"

export default function CartLineItems({ lineItem, key, handleChangeQty }) {
  return (
    <div className="checkout-cart-item">
      <div className="cart-title-div">
        <h6 className="item-title">{lineItem.item.title}</h6>
      </div>
      <img className="cart-item-img" src={lineItem.item.image} alt="" />
      <div className="cart-info">
        <p className="item-qty">qty:{lineItem.qty}</p>
        <p className="item-price">${lineItem.item.price}</p>
        <button className="cart-increment-btn add" onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}>+</button>
        <button className="cart-increment-btn subtract" onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}>-</button>
      </div>

    </div>
  )
}