import axios from 'axios';
import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { ArticleAction, ArticleActionTypes } from 'utils/types/article';

export const fetchArticles =
  () => async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_ARTICLE });
      const res = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/blogs'
      );

      setTimeout(() => {
        dispatch({
          type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
          payload: res.data,
        });
      }, 500);
    } catch (error) {
      const err = error as AxiosError;

      dispatch({
        type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
        payload: err.message,
      });
    }
  };
