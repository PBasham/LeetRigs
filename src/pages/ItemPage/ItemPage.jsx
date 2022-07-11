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

export default function ItemPage({ setShowItemDetail, setItemDetail, addItemToCartClick,  toggleActiveNavBtn }) {

    const [storeItems, setStoreItems] = useState([])
    //const [search, setSearch] = useState("")
    
    useEffect(function() {
        (async function getStoreItems(){
            const items = await ItemsApi.getAll()
            setStoreItems(items)
        })();
        toggleActiveNavBtn(0)
    }, [])
    

    
    // useEffect(function () {
    //     (async function getSearch(){
    //         const items = await ItemsApi.getMatching(search)
    //         setStoreItems(items)
    //     })()
    // }, [search])

    const handleSearchChange = async (e) => {
        let currentSearch = e.target.value
        if (currentSearch.trim() === "") {
            const items = await ItemsApi.getAll()
            setStoreItems(items)
            return
        }
        (async function getSearch(){
            const items = await ItemsApi.getMatching(currentSearch)
            console.log(items); 
            setStoreItems(items)
            })()
        
    }
    
    


    return (
        <div className="item-page-div">
            <div className="item-page-header">
                <h1 className="store-name">LeetRigs</h1>
                <h2 className="store-tagline">Premium gear to make sure you destroy the competition!</h2>
            </div>
            <div className="item-page-filterbtns">
                <form action="">
            Search: <input type="text" name="search" onChange={handleSearchChange}/>
                </form>
            </div>
            <div className="item-page-div">
                <ItemList storeItems={storeItems} setShowItemDetail={setShowItemDetail} setItemDetail={setItemDetail} addItemToCartClick={addItemToCartClick} />
            </div>
        </div>
    )

}