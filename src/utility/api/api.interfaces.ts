export type POST =
  | 'auth/pin' // Works
  | 'auth/token' // Works
  | 'articles/publish'
  | 'articles'
  | 'editors/create?authToken={{authtoken}}'
  | 'editors/create?authToken={{authtoken}}'
  | 'editors/update?authToken={{authtoken}}';
export type GET = 'articles' | 'authors' | 'articles/publish' | 'editors/me' | 'editors' | 'authors/me' | 'user/me';
export type PUT = 'articles'; // Works
