import { ArticleState, IArticle } from 'utils/interfaces/article';
import { ArticleAction, ArticleActionTypes } from 'utils/types/article';

const initialState: ArticleState = {
  articles: [],
  articlesSearch: [],
  article: {} as IArticle,
  searchText: '',
  loading: false,
  error: null,
};

export const articleReducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLES:
      return {
        ...state,
        loading: true,
        error: null,
        articles: [],
      };
    case ArticleActionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: action.payload,
      };
    case ArticleActionTypes.FETCH_SEARCH_ARTICLE:
      return {
        ...state,
        loading: true,
        error: null,
        articlesSearch: [],
      };
    case ArticleActionTypes.FETCH_SEARCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articlesSearch: action.payload,
      };
    case ArticleActionTypes.FETCH_ARTICLE:
      return {
        ...state,
        loading: true,
        error: null,
        article: {} as IArticle,
      };
    case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        article: action.payload,
      };
    case ArticleActionTypes.FETCH_SEARCH_TEXT_SUCCESS:
      return {
        ...state,
        searchText: action.payload,
      };
    case ArticleActionTypes.FETCH_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        articles: [],
      };

    default:
      return state;
  }
};
