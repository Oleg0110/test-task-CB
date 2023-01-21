import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import { CustomButton } from 'components';
import { CircularProgress } from '@mui/material';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { getArticleId } from 'utils/functions';
import { useActions } from 'hooks/useActions';
import styles from './Article.module.scss';

const Article: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { fetchArticle } = useActions();
  const { article, loading, error } = useTypeSelector((state) => state.article);

  const articleID = getArticleId(location.pathname);

  useEffect(() => {
    fetchArticle(articleID);
  }, [articleID]);

  const { imageUrl, title, summary } = article;

  return (
    <div className={styles.mainContainer}>
      {error && (
        <div className={styles.infoBlock}>
          <p className={styles.infoMassage}>{error}</p>
        </div>
      )}
      {(loading && (
        <div className={styles.loading}>
          <CircularProgress size="75px" />
        </div>
      )) || (
        <>
          <div className={styles.photoBlock}>
            <img
              className={styles.backgroundPhoto}
              src={imageUrl}
              alt={title}
            />
          </div>
          <div className={styles.contentBlock}>
            <div className={styles.articleBlock}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.article}>{summary}</p>
            </div>
            <div className={styles.buttonBlock}>
              <CustomButton
                arrowPosition="arrowLeft"
                onClick={() => navigate(ROUTES.home)}
              >
                Back to homepage
              </CustomButton>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Article;
