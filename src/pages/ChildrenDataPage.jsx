/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Container } from 'react-bootstrap';
import ChildList from '../components/childrencomps/ChildList';
import { getAllChildern } from '../utils/local-data-child';

class ChildrenDataPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      children: getAllChildern(),
    };
  }

  render() {
    return (
      <div className="children-data">
        <div className="jumbotron jumbotron-fluid py-5 text-white">
          <div className="container mt-5">
            <h1 className="display-4">Data Balita</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        <Container><ChildList children={this.state.children} /></Container>
      </div>
    );
  }
}

export default ChildrenDataPage;
