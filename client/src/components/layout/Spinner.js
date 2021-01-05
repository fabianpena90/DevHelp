import React, { Fragment } from 'react';
import spinner from './spiner.gif';

function Spinner() {
  return (
    <Fragment>
      <img
        src={spinner}
        styles={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  );
}

export default Spinner;
