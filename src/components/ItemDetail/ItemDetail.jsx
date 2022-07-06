/*========================================
        Import Css
========================================*/
import "./ItemDetail.css"

export default function ItemDetail({ setShowItemDetail }) {

    const leaveDetailWindow = (e) => {
        setShowItemDetail(false);
    }

    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <button className="item-detail-close-btn" onClick={leaveDetailWindow}>X</button>
                item-Detail
            </div>
        </div>
    )
}