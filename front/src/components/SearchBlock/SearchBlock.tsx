import React, { FormEvent, useState } from 'react';
import CustomInput from 'components/CustomInput/CustomInput';
import { useActions } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';
import styles from './SearchBlock.module.scss';

const SearchBlock: React.FC = () => {
  const { fetchSearchArticle, sendSearchText } = useActions();
  const { articles, error, searchText } = useTypeSelector(
    (state) => state.article
  );

  const [isSearch, setIsSearch] = useState(searchText);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    const reg = new RegExp(/^[a-zA-Z\s]{0,100}$/);
    const trimText = isSearch.trim();
    const checkStr = !!trimText.match(reg);

    setIsError(!checkStr);

    !checkStr === false &&
      !!error !== true &&
      fetchSearchArticle(trimText, articles) &&
      sendSearchText(trimText);

    e.preventDefault();
  };

  return (
    <div className={styles.searchBlock}>
      <h4 className={styles.textFilter}>Filter by keywords</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputField}>
          <CustomInput
            error={isError}
            errorText="You should use at least 2 characters, the letters a-zA-Z "
            required={false}
            type="text"
            variant="outlined"
            onChange={(e) => setIsSearch((e.target as HTMLInputElement).value)}
            placeholder="Search"
            value={isSearch}
          />
          <div className={styles.searchIcon} />
        </div>
      </form>
    </div>
  );
};

export default SearchBlock;
