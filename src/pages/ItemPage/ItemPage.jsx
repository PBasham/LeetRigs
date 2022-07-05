/*========================================
        import Depenedencies
========================================*/
import { useState, useEffect, useRef } from "react";
// import ItemList from "../../pages/ItemList/ItemList.jsx"
/*========================================
        Import css
========================================*/
import "../../index.css"
import "./ItemPage.css"

export default function ItemPage(props) {

    return (
        <div className="item-page-div">
        <div className="item-page-header">
            Item Page Header Area
        </div>
        <div className="item-page-filterbtns">
            Filter Buttons
        </div>
        <div className="item-page-div">
            Page Content
        </div>
        </div>
    )

}