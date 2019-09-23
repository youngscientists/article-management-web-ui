import { apiGET, apiHandleError, apiPUT } from '@/utility/api/api';
import Vue from 'vue';
import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators';
import { RefreshDates } from '@/store/store.refreshDates';
import { GET } from '@/utility/api/api.interfaces';

interface User {
  id: string;
  name: string;
  email: string;
  lastPinIssued: Date;
  subjects: string;
  level: number;
}

@Module({ name: 'user' })
export default class UserModule extends VuexModule {
  me: User = null;
  editors: User[] = null;
  authors: User[] = null;

  /**
   * @param force if true the data is always fetched from the server.
   */
  @Action
  async GetEditors(force?: boolean) {
    this.HandleGet({ force, mutation: 'Editors', path: 'editors', type: 'editors' });
  }
  @Mutation
  Editors(input: { data: User[] }) {
    this.editors = input.data;
  }

  /**
   * @param force if true the data is always fetched from the server.
   */
  @Action
  async GetMe(force?: boolean) {
    this.HandleGet({ force, mutation: 'Me', path: 'user/me', type: 'me' });
  }
  @Mutation
  Me(input: { data: User; set?: boolean }) {
    this.me = input.data;
    if (input.set) {
      const a: any = Object.assign({}, this.me);
      a.school = '123'; // TODO
      a.biography = '123';
      a.country = '123';
      apiPUT('editors', a, { id: a.id })
        .then(res => res.json())
        .then(res => console.log('ME/PUT', res));
    }
  }

  /**
   * @param force if true the data is always fetched from the server.
   */
  @Action
  async GetAuthors(force?: boolean) {
    this.HandleGet({ force, mutation: 'Authors', path: 'authors', type: 'authors' });
  }
  @Mutation
  Authors(input: { data: User[] }) {
    this.authors = input.data;
  }
  @Action
  private async HandleGet(input: {
    type: 'me' | 'authors' | 'editors';
    path: 'user/me' | 'authors' | 'editors';
    mutation: 'Me' | 'Authors' | 'Editors';
    force: boolean;
  }) {
    if (this[input.type] === null || input.force || RefreshDates.refreshDates.user[input.type] <= Date.now()) {
      const res = await apiGET(input.path);
      const data = await res.json();
      if (apiHandleError(data)) {
        RefreshDates.RefreshDate({ module: 'user', prop: { type: input.type } });
        this[input.mutation]({ data: data });
      } else {
        Vue.prototype.$notify({ type: 'warning', message: 'Access Denied' });
      }
    }
  }
}
