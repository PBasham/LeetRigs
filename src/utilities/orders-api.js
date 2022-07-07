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
export function findCart() {
  return sendRequest(`${BASE_URL}/mycart`)
}

