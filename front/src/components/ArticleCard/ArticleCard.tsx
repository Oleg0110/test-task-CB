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
import styles from './ArticleCard.module.scss';

interface IArticleCard {
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
}) => {
  const dateString = convertedDateFunc(publishedAt);

  return (
    <Card>
      <CardActionArea>
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
            {summary}
          </SummaryTypography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: 0, marginLeft: '25px' }}>
        <CustomButton arrowPosition="arrowRight">Read more</CustomButton>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
