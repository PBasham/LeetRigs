import sendRequest from './send-request'

const BASE_URL = '/api/orders'

export function getCart() {
  return sendRequest(`${BASE_URL}/checkout`)
}

