import { IArticle } from './interfaces/article';
import styles from '../components/ArticleCard/ArticleCard.module.scss';

export const returnCorrectDay = (date: number): string => {
  if (date > 3 && date < 21) return `${date}th`;
  switch (date % 10) {
    case 1:
      return `${date}st`;
    case 2:
      return `${date}nd`;
    case 3:
      return `${date}rd`;
    default:
      return `${date}th`;
  }
};

export const convertedDateFunc = (publishedAt: string): string => {
  let convertedDate = new Date(publishedAt).toDateString().split(' ');

  const date = {
    day: returnCorrectDay(+convertedDate[2]),
    month: convertedDate[1],
    year: convertedDate[3],
  };

  return `${date.month} ${date.day}, ${date.year}`;
};

export const getArticleId = (path: string): string =>
  `${path.split('/').pop()}`;

export const getSearchedArticles = (
  searchText: string,
  articlesArr: IArticle[]
): IArticle[] => {
  let searchedArticles: IArticle[] = [];

  const keyWords = searchText.toLocaleLowerCase().split(' ');

  articlesArr.forEach((art) => {
    let article = { ...art };

    let summaryCount = 0;
    let titleCount = 0;

    for (let word of keyWords) {
      if (word.length > 1) {
        let summaryNumber = article.summary.toLocaleLowerCase().indexOf(word);
        let titleNumber = article.title.toLocaleLowerCase().indexOf(word);

        if (summaryNumber > -1) {
          const reg = new RegExp(word, 'gi');

          article.summary = article.summary.replaceAll(
            reg,
            `<span class=${styles.keyWord}>$&</span>`
          );

          summaryCount += 1;
        }

        if (titleNumber > -1) {
          const reg = new RegExp(word, 'gi');

          article.title = article.title.replaceAll(
            reg,
            `<span class=${styles.keyWord}>$&</span>`
          );

          titleCount += 1;
        }
      }

      if (summaryCount + titleCount > 0) {
        article.count = titleCount;
        searchedArticles.push(article);
      }
    }
  });

  const articlesId: string[] = searchedArticles.map((art) => art.id);

  const uniqArticles = searchedArticles.filter(
    (f, index) => !articlesId.includes(f.id, index + 1)
  );

  return uniqArticles.sort((a, b) => (a.count < b.count ? 1 : -1));
};
