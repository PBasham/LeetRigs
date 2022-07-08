import "./CartLineItems.css"

export default function CartLineItems({ lineItem, key, handleChangeQty}) {
  return (
  <div className="checkout-cart-item">
    <h6>{ lineItem.item.title }</h6>
    <img src={lineItem.item.image} alt="" />
    <p className="checkout-item-price">qty:{ lineItem.qty }</p> <p>${lineItem.item.price}</p>
    <p>${lineItem.item.price}</p>
    {/* Two buttons, one for subtract one and one for add 1 */}
    <button className="increment-btn add" onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}>+</button>
    <button className="increment-btn subtract" onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}>-</button>
  </div>
)
}