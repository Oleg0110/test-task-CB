import React, { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useActions } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { ArticleCard, SearchBlock } from 'components';
import styles from './Home.module.scss';

const Home = () => {
  const { fetchAllArticles } = useActions();
  const { articles, articlesSearch, loading, error } = useTypeSelector(
    (state) => state.article
  );

  useEffect(() => {
    articles[0] === undefined && fetchAllArticles();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <SearchBlock />
      <div className={styles.resultBlock}>
        <h4 className={styles.textResult}>Results: {articlesSearch.length}</h4>
      </div>
      {error && (
        <div className={styles.infoBlock}>
          <p className={styles.infoMassage}>{error}</p>
        </div>
      )}
      {!loading && articlesSearch[0] === undefined && (
        <div className={styles.infoBlock}>
          <p className={styles.infoMassage}>Sorry, there is no such article</p>
        </div>
      )}
      {(loading && (
        <div className={styles.loadingBlock}>
          <CircularProgress size="75px" />
        </div>
      )) || (
        <div className={styles.articleCardField}>
          {!!error === false &&
            articlesSearch.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                imageUrl={article.imageUrl}
                publishedAt={article.publishedAt}
                summary={article.summary}
                articleID={article.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
