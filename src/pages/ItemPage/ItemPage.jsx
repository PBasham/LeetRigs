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

export default function ItemPage(props) {

    const [ storeItems, setStoreItems ] = useState([])
    
    useEffect(function() {
        async function getStoreItems(){
            const items = await ItemsApi.getAll()
            setStoreItems(items)
        }
        getStoreItems()
        console.log(storeItems);
<<<<<<< HEAD
    }, [])
=======
    }, [storeItems])
>>>>>>> main
    


    return (
        <div className="item-page-div">
            <div className="item-page-header">
                Item Page Header Area
            </div>
            <div className="item-page-filterbtns">

            </div>
            <div className="item-page-div">
                Page Content
                <ItemList storeItems={storeItems}/>
            </div>
        </div>
    )

}