/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ActionDeleteButton({ id, onDelete }) {
  return (
    <div className="action-button">
      <button
        className="action-button__delete-button"
        aria-label="delete-data-button"
        onClick={() => onDelete(id)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}

export default ActionDeleteButton;
