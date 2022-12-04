/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBidan, deleteBidan } from '../utils/local-data-bidan';
import BidanDetail from '../components/bidancomps/BidanDetail';

function BidanDetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <BidanDetailPage id={id} navigate={navigate} />;
}

class BidanDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bidan: getBidan(props.id),
    };

    this.onHandleDelete = this.onHandleDelete.bind(this);
  }

  onHandleDelete = (id) => {
    deleteBidan(id);
    this.props.navigate('/bidans-data');
  };

  render() {
    if (this.state.bidan === null) {
      return <p>Data Tidak Ditemukan!</p>;
    }

    return (
      <div className="child-detail">
        <BidanDetail
          {...this.state.bidan}
          id={this.props.id}
          onDelete={this.onHandleDelete}
        />
      </div>
    );
  }
}

export default BidanDetailPageWrapper;
