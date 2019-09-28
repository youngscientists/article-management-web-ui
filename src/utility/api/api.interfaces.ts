export type POST =
  | 'auth/pin' // Works
  | 'auth/token' // Works
  | 'articles/publish'
  | 'articles';
export type GET = 'articles' | 'authors' | 'articles/publish' | 'editors/me' | 'editors' | 'authors/me' | 'user/me' | 'teams';
export type PUT = 'articles' | 'authors' | 'editors'; // Works
