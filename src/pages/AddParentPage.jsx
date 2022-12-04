/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParentInput from '../components/parentcomps/ParentInput';
import { addParent } from '../utils/local-data-parent';

function AddParentPage() {
  const navigate = useNavigate();

  function onAddParentHandler(parent) {
    addParent(parent);
    navigate('/parents-data');
  }

  return (
    <div className="add-new-parent">
      <ParentInput addParent={onAddParentHandler} />
    </div>
  );
}

export default AddParentPage;
