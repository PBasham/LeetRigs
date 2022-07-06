import "./ItemListItem.css"

export default function ItemListItem({ storeItem }) {
    return (
            <div className="item-card">
                <h3 className="item-title">{storeItem.title}</h3>
                <img  className="item-img"src={storeItem.image} alt="itempic" />
                <p className="item-price">${storeItem.price}</p>
            </div>
    )
}