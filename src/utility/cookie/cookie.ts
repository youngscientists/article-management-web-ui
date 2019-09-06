import store from '@/store';

export function InitCookie() {
  const token = parseCookie(document.cookie);
  if (token) {
    store.commit('auth/token', token);
  }
}
function parseCookie(string: string) {
  const res = string.concat(';').match(/Token=([^;]*);/);
  return res ? res[1] : '';
}

export function AddCookie(key: string, value: string) {
  document.cookie = `${key}=${value}; max-age=${60 * 60 * 24};`;
}
