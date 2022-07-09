/*========================================
        import dependencies
========================================*/
import * as OrderApi from "../../utilities/orders-api.js"

/*========================================
        Import Css
========================================*/
import "./ItemDetail.css"

export default function ItemDetail({ setShowItemDetail, itemDetail, cart, setCart }) {

    const leaveDetailWindow = (e) => {
        setShowItemDetail(false);
    }

    /*========================================
            functions
    ========================================*/
    const handleClick = () => {
        const activeCart = OrderApi.addToCart(itemDetail._id)
    }

    // async function handleAddToCart(itemId) {
    //     const activeCart = await OrderApi.addToCart(itemId)
    //     setCart(activeCart)
    //     }


    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <button className="item-detail-close-btn" onClick={leaveDetailWindow}>X</button>
                <h3 className="item-detail-name">{itemDetail.title}</h3>
                    <img className="item-detail-img" src={itemDetail.image}></img>
                <div className="info">
                        <p className="item-detail-price">Price: ${itemDetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <button className="btn-add" onClick={handleClick}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}