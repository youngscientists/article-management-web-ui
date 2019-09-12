import { GET, POST } from './api.interfaces';
import router from '@/router';
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
export function apiGET(
  path: GET,
  options?: {
    query?: string;
    id?: string;
  }
) {
  options = options !== undefined ? options : {};
  return fetch(
    `${process.env.VUE_APP_API_URL}/api/${path}${options.id !== undefined ? '/'.concat(options.id) : ''}${
      options.query !== undefined ? '?q='.concat(options.query) : ''
    }`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  );
}
/**
 * Returns true if there is NO error.
 */
export function apiHandleError(res: any) {
  if (res.name === 'JsonWebTokenError') {
    console.warn('[apiHandleError] Token Required');
    router.push({ name: 'login' });
    return false;
  }
  return true;
}
