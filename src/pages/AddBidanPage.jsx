/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addBidan } from '../utils/local-data-bidan';
import BidanInput from '../components/bidancomps/BidanInput';

function AddBidanPage() {
  const navigate = useNavigate();

  function onAddBidanHandler(bidan) {
    addBidan(bidan);
    navigate('/bidans-data');
  }

  return (
    <div className="add-bidan">
      <BidanInput addBidan={onAddBidanHandler} />
    </div>
  );
}

export default AddBidanPage;
