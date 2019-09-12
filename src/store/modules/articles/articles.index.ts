import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { apiGET, apiHandleError } from '@/utility/api/api';
import Vue from 'vue';

@Module({ name: 'articles' })
export default class ArticlesModule extends VuexModule {
  allArticles: Article[] = [];
  currentArticle: Article = undefined;
  @Action
  getAllArticles(payload: Payload) {
    apiGET('articles')
      .then(res => res.json())
      .then(res => {
        if (apiHandleError(res)) {
          console.log('ARTICLES', res);
          this.all(res);
        } else {
          payload.vm.$notify({ type: 'warning', message: 'Access Denied' });
        }
      })
      .catch(err => {
        console.warn(err);
      });
  }

  @Mutation
  all(payload: Article[]) {
    this.allArticles = payload;
  }
  @Mutation
  current(payload: Article) {
    this.currentArticle = payload;
  }
}
interface Payload {
  vm: Vue;
}

export interface Article {
  authors: [];
  copyright: string;
  date: Date;
  type: ArticleType;
  status: ArticleStatus;
  subject: { name: string; id: string };
  docId: string;
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
  editors: [];
  link: string;
}
export enum ArticleType {
  'ReviewArticle' = 'Review Article',
  'Blog' = 'Blog',
  'OriginalResearch' = 'Original Research',
  'MagazineArticle' = 'Magazine Article'
}
export enum ArticleStatus {
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
