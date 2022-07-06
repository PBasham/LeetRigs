import ItemListItem from "../ItemListItem/ItemListItem.jsx"
import "./ItemList.css"

export default function ItemList({ storeItems }) {
    // return (
    //     <div className="item-List">
    //         {storeItems.map((t, index) => {
    //             {console.log(t.title)};
    //             <ItemListItem key={index} itemName={t.title}/>
    //         })}
    //     </div>
    // )
    const items = storeItems.map(item =>
        <ItemListItem
          key={item._id}
          storeItem={item}
        />
      );
      return (
        <div className="item-list-container">
          {items}
        </div>
      );
}