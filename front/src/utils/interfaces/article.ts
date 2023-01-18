export interface IArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
}

export interface ArticleState {
  articles: IArticle[];
  article: IArticle;
  loading: boolean;
  error: null | string;
}
