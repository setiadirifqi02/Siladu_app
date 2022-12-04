/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PosyanduInput from '../components/posyanducomps/PosyanduInput';
import { addPosyandu } from '../utils/local-data-posyandu';

function AddPosyanduPage() {
  const navigate = useNavigate();

  function onAddPosyanduHandler(posyandu) {
    addPosyandu(posyandu);
    navigate('/posyandus-data');
  }

  return (
    <div className="add-new-posyandu">
      <PosyanduInput addPosyandu={onAddPosyanduHandler} />
    </div>
  );
}

export default AddPosyanduPage;
