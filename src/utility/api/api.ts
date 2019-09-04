import { POST } from './api.interfaces';

export function apiCall(path: POST, data: any) {
  return fetch(`${process.env.VUE_APP_API_URL}/api/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
