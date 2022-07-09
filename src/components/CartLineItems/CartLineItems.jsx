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

        <p className="item-price">${lineItem.item.price}</p>

        <div className="item-qty-div">
          <button className="cart-increment-btn subtract" onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}>-</button>
          <div className="item-qty">{lineItem.qty}</div>
          <button className="cart-increment-btn add" onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}>+</button>
        </div>
        <div className="item-ext-div">
          <p className="item-price-ext">${lineItem.extPrice.toFixed(2)}</p>
        </div>
      </div>

    </div>
  )
}