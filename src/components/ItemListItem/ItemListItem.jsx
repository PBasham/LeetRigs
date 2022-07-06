/*========================================
        import Css
========================================*/
import "./ItemListItem.css"

export default function ItemListItem({ storeItem, setShowItemDetail }) {
    // when an itemcard is clicked send the current information to the ItemDetail component
    const handleClick = () => {
        // set display of item-detail to block or something.
        setShowItemDetail(true)
        console.log(`I've been clicked: ${storeItem._id}`)
    }

    return (
            <div className="item-card" onClick={handleClick}>
                <h3 className="item-title">{storeItem.title}</h3>
                <img  className="item-img"src={storeItem.image} alt="itempic" />
                <p className="item-price">${storeItem.price}</p>
            </div>
    )
}