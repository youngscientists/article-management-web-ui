import { POST, GET } from './api.interfaces';
import store, { RootState } from '@/store';
export function apiPOST(path: POST, data: any) {
  return fetch(`${process.env.VUE_APP_API_URL}/api/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'omit',
    body: JSON.stringify(data)
  });
}
export function apiGET(path: GET) {
  return fetch(`${process.env.VUE_APP_API_URL}/api/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.state.auth.token}`
    },
    credentials: 'omit'
  });
}