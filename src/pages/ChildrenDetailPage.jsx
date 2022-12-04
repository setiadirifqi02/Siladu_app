/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getChild, deleteChild } from '../utils/local-data-child';
import ChildDetail from '../components/childrencomps/ChildDetail';

function ChildrenDetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <ChildrenDetailPage id={id} navigate={navigate} />;
}

class ChildrenDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      child: getChild(props.id),
    };

    this.onHandleDelete = this.onHandleDelete.bind(this);
  }

  onHandleDelete = (id) => {
    deleteChild(id);
    this.props.navigate('/children-data');
  };

  render() {
    if (this.state.child === null) {
      return <p>Data Tidak Ditemukan!</p>;
    }

    return (
      <div className="child-detail">
        <ChildDetail
          {...this.state.child}
          id={this.props.id}
          onDelete={this.onHandleDelete}
        />
      </div>
    );
  }
}
export default ChildrenDetailPageWrapper;
