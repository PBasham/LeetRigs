/*========================================
        import Css
========================================*/
import "./ItemListItem.css"

export default function ItemListItem({ storeItem, setShowItemDetail, setItemDetail, addItemToCartClick }) {
    // when an itemcard is clicked send the current information to the ItemDetail component
    const handleDivClick = () => {
        // set display of item-detail to block or something.
        setShowItemDetail(true)
        setItemDetail(storeItem)
        // console.log(`I've been clicked: ${storeItem._id}`)
    }
    const handleAddClick = () => {
        addItemToCartClick(storeItem._id)
    }

    return (
        <div className="item-card">
            <div className="item-background-click" onClick={handleDivClick}>
            </div>
            <div className="item-title-div">
                <h3 className="item-title">{storeItem.title}</h3>
            </div>
            <img className="item-img" src={storeItem.image} alt="itempic" />
            <div className="item-card-bottom">
                <p className="item-price">${storeItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <button className="item-card-btn-add" onClick={handleAddClick}>+ <span>Cart</span></button>
            </div>
        </div>
    )
}