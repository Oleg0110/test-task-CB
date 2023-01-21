import React from 'react';
import useRoutes from 'utils/routes';
import styles from './App.module.scss';

const App: React.FC = () => {
  const routes = useRoutes();

  return (
    <div className={styles.App}>
      <div className={styles.mainContainer}>{routes}</div>
    </div>
  );
};

export default App;
