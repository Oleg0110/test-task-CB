import { ArticleState, IArticle } from 'utils/interfaces/article';
import { ArticleAction, ArticleActionTypes } from 'utils/types/article';

const initialState: ArticleState = {
  articles: [],
  article: {} as IArticle,
  loading: false,
  error: null,
};

export const articleReducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLE:
      return {
        ...state,
        loading: true,
        error: null,
        articles: [],
      };
    case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: action.payload,
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
