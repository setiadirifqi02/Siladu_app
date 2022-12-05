/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ActionEditButton({ link }) {
  return (
    <div className="action-button">
      <button
        type="button"
        className="action-button__edit-button"
        aria-label="edit-data-button"
      >
        <Link to={link}><FontAwesomeIcon icon={faPencil} /></Link>
      </button>
    </div>
  );
}

export default ActionEditButton;
