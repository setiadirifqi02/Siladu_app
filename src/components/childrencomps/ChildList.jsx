/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import ChildItem from './ChildItem';

function ChildList({ children }) {
  return (
    <div className="children-list my-4">
      {children.length > 0 ? (
        children.map((child) => (
          <ChildItem
            key={child.id}
            id={child.id}
            {...child}
          />
        ))
      ) : (
        <p>Tidak ada data y</p>
      )}
    </div>
  );
}

export default ChildList;
