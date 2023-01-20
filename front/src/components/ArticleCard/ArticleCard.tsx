import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CustomButton from 'components/CustomButton/CustomButton';
import { CardActionArea, CardActions, CardContent } from '@mui/material';
import {
  DateTypography,
  SummaryTypography,
  TitleTypography,
} from 'styles/articleCard';
import { convertedDateFunc } from 'utils/functions';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import styles from './ArticleCard.module.scss';

interface IArticleCard {
  articleID: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  summary: string;
}

const ArticleCard: React.FC<IArticleCard> = ({
  imageUrl,
  publishedAt,
  summary,
  title,
  articleID,
}) => {
  const navigate = useNavigate();

  const dateString = convertedDateFunc(publishedAt);

  const symbolLimit = summary.slice(0, 100);

  const navigateToArticle = () =>
    summary.length > 100 && navigate(`${ROUTES.article}/${title}/${articleID}`);

  return (
    <Card>
      <CardActionArea onClick={navigateToArticle}>
        <CardMedia
          component="img"
          height="217"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <DateTypography variant="dateFont" component="div">
            <div className={styles.calendarIcon} />
            {dateString}
          </DateTypography>
          <TitleTypography variant="titleFont" component="div">
            {title}
          </TitleTypography>
          <SummaryTypography component="div" variant="articleFont">
            {summary.length > 100 ? `${symbolLimit}...` : summary}
          </SummaryTypography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: 0, marginLeft: '25px' }}>
        <CustomButton arrowPosition="arrowRight" onClick={navigateToArticle}>
          Read more
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
