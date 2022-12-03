/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function SearchBar({ keyword, keywordChange, placeholder }) {
  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <input
          type="text"
          placeholder={placeholder}
          aria-label="Search"
          value={keyword}
          onChange={(event) => keywordChange(event.target.value)}
        />
      </div>
      <div className="search-bar__icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>

    </div>
  );
}

export default SearchBar;
