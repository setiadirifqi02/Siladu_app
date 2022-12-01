/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getChild } from '../utils/local-data-child';
import ChildDetail from '../components/childrencomps/ChildDetail';

function ChildrenDetailPageWrapper() {
  const { id } = useParams();

  return <ChildrenDetailPage id={id} />;
}

class ChildrenDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      child: getChild(props.id),
    };
  }

  render() {
    // const { child } = this.state;

    if (this.state.child === null) {
      return <p>Data Tidak Ditemukan!</p>;
    }

    return (
      <div className="child-detail">
        {/* <ChildDetail {...this.state.child} /> */}
        <ChildDetail {...this.state.child} />
      </div>
    );
  }
}
export default ChildrenDetailPageWrapper;
