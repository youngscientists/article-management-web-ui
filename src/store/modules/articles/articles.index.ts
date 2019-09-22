import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { apiGET, apiHandleError, apiPUT } from '@/utility/api/api';
import Vue from 'vue';
import { RefreshDates } from '@/store/store.refreshDates';

@Module({ name: 'articles' })
export default class ArticlesModule extends VuexModule {
  allArticles: Article[] = null;
  currentArticle: Article = null;
  articlesSortedBy = {
    name: '',
    direction: true
  };

  @Action
  async getAllArticles(payload: { force?: boolean; sendRefreshNotification?: boolean }) {
    if (this.allArticles === null || payload.force || RefreshDates.refreshDates.articles.all <= Date.now()) {
      const res = await apiGET('articles');
      const data = await res.json();
      if (apiHandleError(data)) {
        RefreshDates.RefreshDate({ module: 'articles', prop: { type: 'all' } });
        this.all(data);
        if (payload.sendRefreshNotification) {
          Vue.prototype.$notify({ type: 'success', message: 'Successfully Refreshed' });
        }
      } else {
        Vue.prototype.$notify({ type: 'warning', message: 'Access Denied' });
      }
    }
  }

  @Mutation
  all(payload: Article[]) {
    this.allArticles = payload;
  }
  @Mutation
  current(payload: Article) {
    this.currentArticle = payload;
  }
  @Mutation
  currentSetStatus(payload: ArticleStatus) {
    this.currentArticle.status = payload;
  }
  @Mutation
  async currentRemoveEditor(payload: { editor: number; vm: Vue; articleID: string }) {
    this.currentArticle.editors = this.currentArticle.editors.filter((v, i) => i !== payload.editor);
    // TODO doesn't work yet.
    apiPUT('articles', { editors: this.currentArticle.editors }, { id: payload.articleID })
      .then(res => res.json())
      .then(res => {
        console.log('RES', res);
        Vue.prototype.$notify('NOT Successfully Removed');
      });
  }
  @Mutation
  resetArticlesSortedBy() {
    this.articlesSortedBy = {
      name: '',
      direction: true
    };
  }
  @Mutation
  sortAllBy(payload: { attribute: string }) {
    const direction =
      this.articlesSortedBy.name === payload.attribute
        ? ((this.articlesSortedBy.direction = !this.articlesSortedBy.direction), this.articlesSortedBy.direction)
        : ((this.articlesSortedBy.direction = true), this.articlesSortedBy.direction);

    this.articlesSortedBy.name = payload.attribute;

    this.allArticles = this.allArticles.sort((a, b) => {
      if (typeof a[payload.attribute] === 'string') {
        if (a[payload.attribute] > b[payload.attribute]) {
          return direction ? 1 : -1;
        }
        if (b[payload.attribute] > a[payload.attribute]) {
          return direction ? -1 : 1;
        }
      } else if (a[payload.attribute] && b[payload.attribute] && payload.attribute === 'editors') {
        // @ts-ignore eslint-disable-next-line
        if (a[payload.attribute][0].name > b[payload.attribute][0].name) {
          return direction ? 1 : -1;
        }
        // @ts-ignore eslint-disable-next-line
        if (b[payload.attribute][0].name > a[payload.attribute][0].name) {
          return direction ? -1 : 1;
        }
      } else if (a[payload.attribute] && b[payload.attribute] && payload.attribute === 'subject') {
        if (a[payload.attribute].name > b[payload.attribute].name) {
          return direction ? 1 : -1;
        }
        if (b[payload.attribute].name > a[payload.attribute].name) {
          return direction ? -1 : 1;
        }
      }

      return 0;
    });
  }
}
interface Payload {
  refresh?: boolean;
}

export interface Article {
  authors: [];
  copyright: string;
  date: Date;
  type: ArticleType;
  status: ArticleStatus;
  subject: { name: string; id: string };
  docId: string;
  id: string;
  deadline: Date;
  notes: string;
  folderId: string;
  markingGridId: string;
  trashed: boolean;
  summary: string;
  reason: string;
  modified: Date;
  wordpressId: number;
  hasPlagiarism: boolean;
  editors: any[];
  link: string;
}
enum ArticleType {
  'ReviewArticle' = 'Review Article',
  'Blog' = 'Blog',
  'OriginalResearch' = 'Original Research',
  'MagazineArticle' = 'Magazine Article'
}
enum ArticleStatus {
  'InReview' = 'In Review',
  'FailedDataCheck' = 'Failed Data Check',
  'PassedDataCheck' = 'Passed Data Check',
  'TechnicalReview' = 'Technical Review',
  'RevisionsRequested' = 'Revisions Requested',
  'ReadytoPublish' = 'Ready to Publish',
  'Published' = 'Published',
  'Submitted' = 'Submitted',
  'Rejected' = 'Rejected',
  'FinalReview' = 'Final Review',
  '2ndEditorRequired' = '2nd Editor Required',
  'EthicalQuestion' = 'Ethical Question'
}
