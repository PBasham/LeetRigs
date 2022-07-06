/*========================================
        Import Css
========================================*/
import "./ItemDetail.css"

export default function ItemDetail({ setShowItemDetail }) {

    const leaveDetailWindow = () => {
        setShowItemDetail(false)
    }

    return (
        <div className="item-detail-container" onClick={leaveDetailWindow}>
            <div className="item-detail-card">
                item-Detail
            </div>
        </div>
    )
}