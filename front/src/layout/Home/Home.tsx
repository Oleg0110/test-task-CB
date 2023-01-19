import React, { FormHTMLAttributes, useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { useActions } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { ArticleCard } from 'components';
import styles from './Home.module.scss';

const Home = () => {
  const [isName, setIsName] = useState('');

  const { fetchArticles } = useActions();
  const { articles } = useTypeSelector((state) => state.article);

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchBlock}>
        <h4 className={styles.textFilter}>Filter by keywords</h4>
        <div className={styles.inputField}>
          <form>
            <TextField
              value={isName}
              onChange={(event) => setIsName(event.target.value)}
              required
              placeholder="Search"
              type="text"
            />
          </form>
        </div>
      </div>
      <div className={styles.resultBlock}>
        <h4 className={styles.textResult}>Results: {articles.length}</h4>
      </div>
      <div className={styles.articleCardField}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            imageUrl={article.imageUrl}
            publishedAt={article.publishedAt}
            summary={article.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
