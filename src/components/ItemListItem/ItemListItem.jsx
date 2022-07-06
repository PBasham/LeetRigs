export default function ItemListItem({ storeItem }) {
    return (
        <div className="item-card">
            <h2>{storeItem.title}</h2>
        </div>
    )
}