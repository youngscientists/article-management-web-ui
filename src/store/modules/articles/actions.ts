/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import { RootState } from '@/store';
import { apiGET } from '@/utility/api/api';
import { ArticlesSate } from './state';
import { ActionTree, ActionContext, Store } from 'vuex';

interface Payload {
  vm: Vue;
}

export const getAllArticles = function(this: Store<RootState>, injectee: ActionContext<ArticlesSate, RootState>, payload: Payload) {
  apiGET('articles')
    .then(res => res.json())
    .then(res => {
      console.log('RES', res);
      if (res.name === 'AccessDeniedError') {
        payload.vm.$notify({ type: 'warning', message: 'Access Denied' });
      } else {
        this.commit('articles/all', res);
      }
    })
    .catch(err => {
      console.warn(err);
    });
};

const ArticlesActions: ActionTree<ArticlesSate, RootState> = {
  getAllArticles
};

export default ArticlesActions;
