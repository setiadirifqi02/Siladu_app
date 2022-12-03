/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import ParentList from '../components/parentcomps/ParentList';
import SearchBar from '../components/SearchBar';
import { getAllParents } from '../utils/local-data-parent';

function ParentsDataPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return <ParentsDataPage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class ParentsDataPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parents: getAllParents(),
      keyword: props.defaultKeyword || '',
      placeholder: 'Masukan nama ibu balita...',
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const parents = this.state.parents.filter((parent) => {
      return parent.momName.toLowerCase().includes(
        this.state.keyword.toLowerCase(),
      );
    });
    return (
      <div className="parents-data">
        <div className="jumbotron jumbotron-fluid py-5 text-white">
          <div className="container mt-5">
            <h1 className="display-4">Data Orang Tua Balita</h1>
            <p className="lead">Menampilkan informasi data Orang Tua dari balita yang terdapat di Posyandu Kelurahan Majakerta.</p>
          </div>
        </div>
        <Container>
          <Row className="align-items-center justify-content-center pt-4">
            <Col sm={12} md={10}>
              <SearchBar
                keyword={this.state.keyword}
                placeholder={this.state.placeholder}
                keywordChange={this.onKeywordChangeHandler}
              />
            </Col>
            <Col sm={12} md={2}>
              <button type="button" aria-label="add data Parent button"><FontAwesomeIcon icon={faPlusCircle} /></button>
            </Col>
          </Row>
          <ParentList parents={parents} />
        </Container>
      </div>
    );
  }
}

export default ParentsDataPageWrapper;
