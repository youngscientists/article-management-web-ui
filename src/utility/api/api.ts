import { GET, POST } from './api.interfaces';
export function apiPOST(path: POST, data: any) {
  return fetch(`${process.env.VUE_APP_API_URL}/api/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  });
}
export function apiGET(path: GET) {
  return fetch(`${process.env.VUE_APP_API_URL}/api/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
}
// /articles?q=trashed:false
