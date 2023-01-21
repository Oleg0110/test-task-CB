export interface IArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
  count: number;
}

export interface ArticleState {
  articles: IArticle[];
  articlesSearch: IArticle[];
  article: IArticle;
  searchText: string;
  loading: boolean;
  error: null | string;
}
