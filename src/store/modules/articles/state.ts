/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

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

export interface ArticlesSate {
  allArticles: Article[];
}

const state: ArticlesSate = {
  allArticles: []
};

export default state;
