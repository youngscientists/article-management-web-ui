/* ============
 * Mutations for the articles module
 * ============
 *
 * The mutations that are available on the
 * articles module.
 */

import { all, current } from './mutation-types';
import { MutationTree } from 'vuex';
import { ArticlesSate, Article } from './state';

const mutations: MutationTree<ArticlesSate> = {
  [all](state: ArticlesSate, payload: []) {
    state.allArticles = payload;
  },
  [current](state: ArticlesSate, payload: Article) {
    state.currentArticle = payload;
  }
};

export default mutations;
