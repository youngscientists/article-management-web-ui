/* ============
 * Mutations for the articles module
 * ============
 *
 * The mutations that are available on the
 * articles module.
 */

import { all } from './mutation-types';
import { MutationTree } from 'vuex';
import { ArticlesSate } from './state';

const mutations: MutationTree<ArticlesSate> = {
  [all](state: ArticlesSate, payload: []) {
    state.allArticles = payload;
  }
};

export default mutations;
