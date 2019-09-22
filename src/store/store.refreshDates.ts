export class RefreshDates {
  static refreshDates = {
    user: {
      me: Date.now(),
      editors: Date.now(),
      authors: Date.now()
    },
    articles: {
      all: Date.now()
    }
  };

  static RefreshDate(keys: RefreshDatesUserKey | RefreshDatesArticlesKey) {
    // Set refresh Date to 15min in from  now
    this.refreshDates[keys.module][keys.prop.type] = Date.now() + 1000 * 60 * 15;
  }
}

interface RefreshDatesUserKey {
  module: 'user';

  prop: { type: 'me' | 'authors' | 'editors' };
}

interface RefreshDatesArticlesKey {
  module: 'articles';

  prop: { type: 'all' | 'f' | 'gh' };
}
