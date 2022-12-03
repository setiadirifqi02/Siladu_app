/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import PosyanduItem from './PosyanduItem';

function PosyanduList({ posyandus }) {
  return (
    <div className="posyandu-list my-4">
      {posyandus.length > 0 ? (
        posyandus.map((posyandu) => (
          <PosyanduItem
            key={posyandu.id}
            id={posyandu.id}
            {...posyandu}
          />
        ))
      ) : (
        <p className="text-center fs-4">Data Tidak Ditemukan</p>
      )}
    </div>
  );
}

export default PosyanduList;
