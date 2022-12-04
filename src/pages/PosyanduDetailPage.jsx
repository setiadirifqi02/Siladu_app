/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPosyandu, deletePosyandu } from '../utils/local-data-posyandu';
import PosyanduDetail from '../components/posyanducomps/PosyanduDetail';

function PosyanduDetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <PosyanduDetailPage id={id} navigate={navigate} />;
}

class PosyanduDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posyandu: getPosyandu(props.id),
    };

    this.onHandleDelete = this.onHandleDelete.bind(this);
  }

  onHandleDelete = (id) => {
    deletePosyandu(id);
    this.props.navigate('/posyandus-data');
  };

  render() {
    if (this.state.posyandu === null) {
      return <p>Data Tidak Ditemukan!</p>;
    }

    return (
      <div className="child-detail">
        <PosyanduDetail
          {...this.state.posyandu}
          id={this.props.id}
          onDelete={this.onHandleDelete}
        />
      </div>
    );
  }
}

export default PosyanduDetailPageWrapper;
