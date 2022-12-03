/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getBidan } from '../utils/local-data-bidan';
import BidanDetail from '../components/bidancomps/BidanDetail';

function BidanDetailPageWrapper() {
  const { id } = useParams();

  return <BidanDetailPage id={id} />;
}

class BidanDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bidan: getBidan(props.id),
    };
  }

  render() {
    if (this.state.bidan === null) {
      return <p>Data Tidak Ditemukan!</p>;
    }

    return (
      <div className="child-detail">
        <BidanDetail {...this.state.bidan} />
      </div>
    );
  }
}

export default BidanDetailPageWrapper;
