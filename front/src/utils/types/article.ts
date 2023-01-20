import { IArticle } from 'utils/interfaces/article';

export enum ArticleActionTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_SEARCH_ARTICLE = 'FETCH_SEARCH_ARTICLE',
  FETCH_SEARCH_ARTICLE_SUCCESS = 'FETCH_SEARCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE = 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR',
}

interface FetchArticlesAction {
  type: ArticleActionTypes.FETCH_ARTICLES;
}

interface FetchArticlesSuccessAction {
  type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS;
  payload: IArticle[];
}

interface FetchSearchArticleAction {
  type: ArticleActionTypes.FETCH_SEARCH_ARTICLE;
}

interface FetchSearchArticleSuccessAction {
  type: ArticleActionTypes.FETCH_SEARCH_ARTICLE_SUCCESS;
  payload: IArticle[];
}

interface FetchArticlesAction {
  type: ArticleActionTypes.FETCH_ARTICLES;
}

interface FetchArticlesSuccessAction {
  type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS;
  payload: IArticle[];
}

interface FetchArticleAction {
  type: ArticleActionTypes.FETCH_ARTICLE;
}

interface FetchArticleSuccessAction {
  type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS;
  payload: IArticle;
}

interface FetchArticleErrorAction {
  type: ArticleActionTypes.FETCH_ARTICLE_ERROR;
  payload: string;
}

export type ArticleAction =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchSearchArticleAction
  | FetchSearchArticleSuccessAction
  | FetchArticleAction
  | FetchArticleSuccessAction
  | FetchArticleErrorAction;
