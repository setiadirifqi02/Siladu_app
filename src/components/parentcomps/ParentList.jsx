/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import ParentItem from './ParentItem';

function ParentList({ parents }) {
  return (
    <div className="parent-list my-4">
      {parents.length > 0 ? (
        parents.map((parent) => (
          <ParentItem
            key={parent.id}
            id={parent.id}
            {...parent}
          />
        ))
      ) : (
        <p>Tidak ada data</p>
      )}
    </div>
  );
}

export default ParentList;
