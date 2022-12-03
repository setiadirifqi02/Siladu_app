/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getPosyandu } from '../utils/local-data-posyandu';
import PosyanduDetail from '../components/posyanducomps/PosyanduDetail';

function PosyanduDetailPageWrapper() {
  const { id } = useParams();

  return <PosyanduDetailPage id={id} />;
}

class PosyanduDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posyandu: getPosyandu(props.id),
    };
  }

  render() {
    if (this.state.posyandu === null) {
      return <p>Data Tidak Ditemukan!</p>;
    }

    return (
      <div className="child-detail">
        <PosyanduDetail {...this.state.posyandu} />
      </div>
    );
  }
}

export default PosyanduDetailPageWrapper;
