/*========================================
        import dependencies
========================================*/
import * as OrderApi from "../../utilities/orders-api.js"

/*========================================
        Import Css
========================================*/
import "./ItemDetail.css"

export default function ItemDetail({ setShowItemDetail, itemDetail }) {

    const leaveDetailWindow = (e) => {
        setShowItemDetail(false);
    }
    


    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <button className="item-detail-close-btn" onClick={leaveDetailWindow}>X</button>
                item-Detail
                <button className="addToCardBtn" >Add To Cart</button>
            </div>
        </div>
    )
}