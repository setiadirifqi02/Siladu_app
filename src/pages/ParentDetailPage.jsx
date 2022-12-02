/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getParent } from '../utils/local-data-parent';
import ParentDetail from '../components/parentcomps/ParentDetail';

function ParentDetailPageWrapper() {
  const { id } = useParams();

  return <ParentDetailPage id={id} />;
}

class ParentDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: getParent(props.id),
    };
  }

  render() {
    if (this.state.parent === null) {
      return <p>Data Tidak Ditemukan!</p>;
    }

    return (
      <div className="parent-detail">
        <ParentDetail {...this.state.parent} />
      </div>
    );
  }
}
export default ParentDetailPageWrapper;
