import "./CartLineItems.css"

export default function CartLineItems({ lineItem, key}) {
  return (
  <div className="checkout-cart-item">
    <h6>{ lineItem.item.title }</h6>
    <img src={lineItem.item.image} alt="" />
    <p className="checkout-item-price">qty:{ lineItem.qty }</p> <p>${lineItem.item.price}</p>
    {/* Two buttons, one for subtract one and one for add 1 */}
  </div>
)
}