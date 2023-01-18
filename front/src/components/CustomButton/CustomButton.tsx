import React, { ReactNode } from 'react';
import { ROUTES } from 'utils/constants';
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
        <button
          type="submit"
          className={styles.buttonStyle}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          <span>{children}</span>
          <div className={styles.arrowIconRight} />
        </button>
      ) : (
        <button
          type="submit"
          className={styles.buttonStyle}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          <div className={styles.arrowIconLeft} />
          <span>{children}</span>
        </button>
      )}
    </>
  );
};

export default CustomButton;
