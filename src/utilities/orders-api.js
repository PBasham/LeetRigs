/*========================================
        DEPENDENCIES
========================================*/
// REUSABLE FETCH FUNCTION FOR GET, POST, ETC.
import sendRequest from './send-request'

/*========================================
        BASE URL
========================================*/
const BASE_URL = '/api/purchases'

/*========================================
        ROUTE REQUESTS
========================================*/
// find unpaid order as cart for current session user in database and create if it doesn not exist.
export function findCart() {
  return sendRequest(`${BASE_URL}/mycart`)
}
// Add the selected item as a line item to the current unpaid order.
export function addToCart(itemId) {
  return sendRequest(`${BASE_URL}/mycart/items/${itemId}, "POST" `)
}

// Update the quantity for the selected item within the unpaid order (cart)
export function updateCart(selectedItem, newItemQty) {
  return sendRequest(`${BASE_URL}/mycart/qty`, "PUT", { selectedItem, newItemQty } )
}

// checkout the unpaid order (cart) and mark the order as paid