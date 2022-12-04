/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getParent, deleteParent } from '../utils/local-data-parent';
import ParentDetail from '../components/parentcomps/ParentDetail';

function ParentDetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <ParentDetailPage id={id} navigate={navigate} />;
}

class ParentDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: getParent(props.id),
    };
    this.onHandleDelete = this.onHandleDelete.bind(this);
  }

  onHandleDelete = (id) => {
    deleteParent(id);
    this.props.navigate('/parents-data');
  };

  render() {
    if (this.state.parent === null) {
      return <p>Data Tidak Ditemukan!</p>;
    }

    return (
      <div className="parent-detail">
        <ParentDetail
          {...this.state.parent}
          id={this.props.id}
          onDelete={this.onHandleDelete}
        />
      </div>
    );
  }
}
export default ParentDetailPageWrapper;
