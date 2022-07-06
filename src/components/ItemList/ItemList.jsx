import ItemListItem from "../ItemListItem/ItemListItem.jsx"

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
        <main className="item-List">
          {items}
        </main>
      );
}