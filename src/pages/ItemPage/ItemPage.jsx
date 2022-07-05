/*========================================
        import Depenedencies
========================================*/
import { useState, useEffect, useRef } from "react";
import ItemList from "../../components/ItemList/ItemList.jsx"
/*========================================
        Import css
========================================*/
import "../../index.css"
import "./ItemPage.css"

export default function ItemPage(props) {

    // useEffect


    return (
        <div className="item-page-div">
            <div className="item-page-header">
                Item Page Header Area
            </div>
            <div className="item-page-filterbtns">

            </div>
            <div className="item-page-div">
                Page Content
                <ItemList />
            </div>
        </div>
    )

}