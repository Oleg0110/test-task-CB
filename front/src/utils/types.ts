export enum SearchActionTypes {
  FETCH_SEARCH = 'FETCH_SEARCH',
  FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS',
  FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR',
}

interface FetchSearchAction {
  type: SearchActionTypes.FETCH_SEARCH;
}

interface FetchSearchSuccessAction {
  type: SearchActionTypes.FETCH_SEARCH_SUCCESS;
  payload: [];
}

interface FetchSearchErrorAction {
  type: SearchActionTypes.FETCH_SEARCH_ERROR;
  payload: string;
}

export type SearchAction =
  | FetchSearchAction
  | FetchSearchSuccessAction
  | FetchSearchErrorAction;
