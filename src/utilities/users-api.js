import { getToken } from './users-service';
import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function remove(credentials) {
  return sendRequest(`${BASE_URL}/delete`, 'DELETE', credentials)
}

export function update(credentials) {
  return sendRequest(`${BASE_URL}/update`, 'PUT', credentials)
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}