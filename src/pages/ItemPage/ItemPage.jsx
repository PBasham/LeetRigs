/*========================================
        import Depenedencies
========================================*/
import { async } from "q";
import { useState, useEffect, useRef } from "react";
import ItemList from "../../components/ItemList/ItemList.jsx"
import * as ItemsApi from "../../utilities/items-api.js"

/*========================================
        Import css
========================================*/
import "../../index.css"
import "./ItemPage.css"

export default function ItemPage(props) {

    const [ storeItems, setStoreItems ] = useState([])
    
    useEffect(() => {
        (async () => {
            const items = await ItemsApi.getAll()
            setStoreItems(items)
        })()

    })
    


    return (
        <div className="item-page-div">
            <div className="item-page-header">
                Item Page Header Area
            </div>
            <div className="item-page-filterbtns">

            </div>
            <div className="item-page-div">
                Page Content
                <ItemList items={items}/>
            </div>
        </div>
    )

}