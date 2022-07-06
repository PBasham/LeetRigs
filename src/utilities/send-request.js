import { getToken } from "./users-service";
// const fetch = require("node-fetch");

export default async function sendRequest(url, method = 'GET', payload = null) { 
  const options = { method };
  
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
    console.log(options)
    
  }
  const token = getToken();
  console.log(token)
  
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  console.log(res)
  
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}