/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import BidanItem from './BidanItem';

function BidanList({ bidans }) {
  return (
    <div className="bidans-list my-4">
      {bidans.length > 0 ? (
        bidans.map((bidan) => (
          <BidanItem
            key={bidan.id}
            id={bidan.id}
            {...bidan}
          />
        ))
      ) : (
        <p className="text-start fs-4">Tidak ada data..</p>
      )}
    </div>
  );
}

export default BidanList;
