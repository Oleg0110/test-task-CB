import React from 'react';
import { TextField } from '@mui/material';
import styles from './CustomInput.module.scss';

interface ICustomInput {
  autoComplete?: 'off' | 'on';
  variant: 'outlined' | 'filled' | 'standard';
  value?: string;
  onSubmit?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  placeholder?: string;
  type: 'text' | 'phone';
  errorText: string;
  error: boolean;
}

const CustomInput: React.FC<ICustomInput> = ({
  autoComplete = 'off',
  errorText,
  placeholder,
  required,
  type = 'text',
  value,
  variant = 'outlined',
  onChange,
  onSubmit,
  error,
}) => {
  return (
    <div className={styles.inputBlock}>
      <TextField
        autoComplete={autoComplete}
        variant={variant}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        required={required}
        placeholder={placeholder}
        type={type}
        error={error}
      />
      {error && <p className={styles.errorText}>{errorText}</p>}
    </div>
  );
};

export default CustomInput;
