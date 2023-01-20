import React, { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useActions } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { ArticleCard, SearchBlock } from 'components';
import styles from './Home.module.scss';

const Home = () => {
  const { fetchAllArticles } = useActions();
  const { articles, loading } = useTypeSelector((state) => state.article);

  useEffect(() => {
    fetchAllArticles();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <SearchBlock />
      <div className={styles.resultBlock}>
        <h4 className={styles.textResult}>Results: {articles.length}</h4>
      </div>
      {(loading && (
        <div className={styles.loading}>
          <CircularProgress size="75px" />
        </div>
      )) || (
        <div className={styles.articleCardField}>
          {articles.map((article) => (
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
