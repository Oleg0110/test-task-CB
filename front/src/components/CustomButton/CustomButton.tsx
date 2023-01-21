import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import styles from './CustomButton.module.scss';

type ArrowPositionTypes = 'arrowRight' | 'arrowLeft';

interface ICustomButton {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSubmit?: () => void;
  arrowPosition: ArrowPositionTypes;
  children: ReactNode;
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  arrowPosition = 'arrowRight',
  onClick,
  onSubmit,
}) => {
  return (
    <>
      {arrowPosition === 'arrowRight' ? (
        <Button color="primary" onClick={onClick} onSubmit={onSubmit}>
          <div className={styles.buttonStyle}>
            <span className={styles.buttonTextRight}>{children}</span>
            <div className={styles.arrowIconRight} />
          </div>
        </Button>
      ) : (
        <Button color="primary" onClick={onClick} onSubmit={onSubmit}>
          <div className={styles.buttonStyle}>
            <div className={styles.arrowIconLeft} />
            <span className={styles.buttonTextLeft}>{children}</span>
          </div>
        </Button>
      )}
    </>
  );
};

export default CustomButton;
