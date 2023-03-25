import React from 'react';
import { Circles } from 'react-loader-spinner';
import css from 'components/styles.module.css';

export const Loader = () => {
  return (
    <div className={css.LoaderContainer}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
