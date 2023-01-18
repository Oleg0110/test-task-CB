import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import CustomButton from 'components/CustomButton/CustomButton';
import styles from './Article.module.scss';

const Article: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.photoBlock}>
        <div className={styles.backgroundPhoto} />
      </div>
      <div className={styles.articleBlock}>
        <h1 className={styles.title}>The 2020 World's Most Valuable Brands</h1>
        <p className={styles.article}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quam
          officia dolorum, doloremque reprehenderit fugiat nihil iure
          voluptatibus eos alias labore similique cupiditate amet totam,
          architecto incidunt. Numquam, dolores tenetur. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Eius quam officia dolorum,
          doloremque reprehenderit fugiat nihil iure voluptatibus eos alias
          labore similique cupiditate amet totam, architecto incidunt. Numquam,
          dolores tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eius quam officia dolorum, doloremque reprehenderit fugiat nihil
          iure voluptatibus eos alias labore similique cupiditate amet totam,
          architecto incidunt. Numquam, dolores tenetur.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quam
          officia dolorum, doloremque reprehenderit fugiat nihil iure
          voluptatibus eos alias labore similique cupiditate amet totam,
          architecto incidunt. Numquam, dolores tenetur. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Eius quam officia dolorum,
          doloremque reprehenderit fugiat nihil iure voluptatibus eos alias
          labore similique cupiditate amet totam, architecto incidunt. Numquam,
          dolores tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eius quam officia dolorum, doloremque reprehenderit fugiat nihil
          iure voluptatibus eos alias labore similique cupiditate amet totam,
          <br />
          <br />
          architecto incidunt. Numquam, dolores tenetur. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Eius quam officia dolorum,
          doloremque reprehenderit fugiat nihil iure voluptatibus eos alias
          labore similique cupiditate amet totam, architecto incidunt. Numquam,
          dolores tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eius quam officia dolorum, doloremque reprehenderit fugiat nihil
          iure voluptatibus eos alias labore similique cupiditate amet totam,
          architecto incidunt. Numquam, dolores tenetur. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Eius quam officia dolorum,
          doloremque reprehenderit fugiat nihil iure voluptatibus eos alias
          labore similique cupiditate amet totam, architecto incidunt. Numquam,
          dolores tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eius quam officia dolorum, doloremque reprehenderit fugiat nihil
          iure voluptatibus eos alias labore similique cupiditate amet totam,
          architecto incidunt. Numquam, dolores tenetur.
        </p>
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
  );
};

export default Article;
