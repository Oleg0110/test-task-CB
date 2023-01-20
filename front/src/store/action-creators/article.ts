import axios from 'axios';
import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { ArticleAction, ArticleActionTypes } from 'utils/types/article';

export const fetchAllArticles =
  () => async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_ARTICLES });
      const res = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/articles'
      );

      setTimeout(() => {
        dispatch({
          type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
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

export const fetchSearchArticle =
  (text: string) => async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_SEARCH_ARTICLE });
      const res = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/articles'
      );

      setTimeout(() => {
        dispatch({
          type: ArticleActionTypes.FETCH_SEARCH_ARTICLE_SUCCESS,
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

export const fetchArticle =
  (articleID: string) => async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_ARTICLE });
      const res = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles/${articleID}`
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
