/*========================================
        import dependencies
========================================*/
import sendRequest from "./send-request"

import BASE_URL from "/api/items"

export function signUp(userData) {
    return sendRequest(BASE_URL, "POST", userData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, "POST", credentials)
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-tokem`)
}