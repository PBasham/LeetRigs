import "./ItemListItem.css"

export default function ItemListItem({ storeItem }) {
    return (
        <div className="item-container">
            <div className="item-card">
            <h2>{storeItem.title}</h2>
            <img src={storeItem.image} width="200" alt="itempic" />
                <h4>${storeItem.price}</h4>
                </div>
        </div>
    )
}