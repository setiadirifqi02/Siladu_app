/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChildInput from '../components/childrencomps/ChildInput';
import { addChild } from '../utils/local-data-child';

function AddChildPage() {
  const navigate = useNavigate();

  function onAddChildHandler(child) {
    addChild(child);
    navigate('/children-data');
  }

  return (
    <div className="add-new-child">
      <ChildInput addChild={onAddChildHandler} />
    </div>
  );
}

export default AddChildPage;
