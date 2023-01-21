import axios from 'axios';
import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { getSearchedArticles } from 'utils/functions';
import { IArticle } from 'utils/interfaces/article';
import { ArticleAction, ArticleActionTypes } from 'utils/types/article';

export const fetchAllArticles =
  () => async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_ARTICLES });

      const res = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/articles'
      );

      const articles: IArticle[] = res.data;

      for (const art of articles) {
        if (art.summary.length > 100) {
          art.summary = `${art.summary.slice(0, 100)}...`;
        }
      }

      setTimeout(() => {
        dispatch({
          type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
          payload: articles,
        });
      }, 500);

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

export const fetchSearchArticle =
  (searchText: string, articlesArr: IArticle[]) =>
  async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_SEARCH_ARTICLE });

      if (searchText.length === 0) {
        setTimeout(() => {
          dispatch({
            type: ArticleActionTypes.FETCH_SEARCH_ARTICLE_SUCCESS,
            payload: articlesArr,
          });
        }, 500);
        return;
      }

      const searchedArticles = getSearchedArticles(searchText, articlesArr);

      setTimeout(() => {
        dispatch({
          type: ArticleActionTypes.FETCH_SEARCH_ARTICLE_SUCCESS,
          payload: searchedArticles,
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

export const sendSearchText =
  (searchText: string) => async (dispatch: Dispatch<ArticleAction>) => {
    dispatch({
      type: ArticleActionTypes.FETCH_SEARCH_TEXT_SUCCESS,
      payload: searchText,
    });
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
