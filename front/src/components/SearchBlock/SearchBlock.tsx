import React, { FormEvent, useState } from 'react';
import { TextField } from '@mui/material';
import styles from './SearchBlock.module.scss';

const SearchBlock = () => {
  const [isSearch, setIsSearch] = useState('');

  const handleSubmit = (e: FormEvent) => {
    console.log(isSearch);

    e.preventDefault();
  };

  return (
    <div className={styles.searchBlock}>
      <h4 className={styles.textFilter}>Filter by keywords</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputField}>
          <TextField
            autoComplete="off"
            variant="outlined"
            value={isSearch}
            onChange={(e) => setIsSearch((e.target as HTMLInputElement).value)}
            required
            placeholder="Search"
            type="text"
          />
          <div className={styles.searchIcon} />
        </div>
      </form>
    </div>
  );
};

export default SearchBlock;
