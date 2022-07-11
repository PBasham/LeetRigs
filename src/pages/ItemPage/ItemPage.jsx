/*========================================
        import Depenedencies
========================================*/
import { useState, useEffect, useRef } from "react";
import ItemList from "../../components/ItemList/ItemList.jsx"
import * as ItemsApi from "../../utilities/items-api.js"

/*========================================
        Import css
========================================*/
import "../../index.css"
import "./ItemPage.css"

export default function ItemPage({ setShowItemDetail, setItemDetail }) {

    const [ storeItems, setStoreItems ] = useState([])
    
    useEffect(function() {
        (async function getStoreItems(){
            const items = await ItemsApi.getAll()
            setStoreItems(items)
        })()
    }, [])
    


    return (
        <div className="item-page-div">
            <div className="item-page-header">
                <h1 className="store-name">LeetRigs</h1>
                <h2 className="store-tagline">Premium gear to make sure you destroy the competition!</h2>
            </div>
            <div className="item-page-filterbtns">

            </div>
            <div className="item-page-div">
                <ItemList storeItems={storeItems} setShowItemDetail={setShowItemDetail} setItemDetail={setItemDetail}/>
            </div>
        </div>
    )

}