/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ActionEditButton({ id, onUpdate }) {
  return (
    <div className="action-button">
      <button
        className="action-button__edit-button"
        aria-label="edit-data-button"
        onClick={() => onUpdate(id)}
      >
        <FontAwesomeIcon icon={faPencil} />
      </button>
    </div>
  );
}

export default ActionEditButton;
