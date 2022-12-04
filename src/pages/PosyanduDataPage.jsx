/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PosyanduList from '../components/posyanducomps/PosyanduList';
import SearchBar from '../components/SearchBar';
import { getAllPosyandu } from '../utils/local-data-posyandu';

function PosyanduDataPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <PosyanduDataPage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class PosyanduDataPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posyandus: getAllPosyandu(),
      keyword: props.defaultKeyword || '',
      placeholder: 'Masukan Nama Posyandu',
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
    const posyandus = this.state.posyandus.filter((posyandu) => {
      return posyandu.namePosyandu.toLowerCase().includes(
        this.state.keyword.toLowerCase(),
      );
    });
    return (
      <div className="posyandu-data">
        <div className="jumbotron jumbotron-fluid py-5 text-white">
          <div className="container mt-5">
            <h1 className="display-4">Data Posyandu</h1>
            <p className="lead">Menampilkan informasi Posyandu yang berada di Kelurahan Majakerta.</p>
          </div>
        </div>
        <Container>
          <Row className="align-items-center justify-content-center pt-4">
            <Col sm={12} md={10}>
              <SearchBar
                keyword={this.state.keyword}
                keywordChange={this.onKeywordChangeHandler}
                placeholder={this.state.placeholder}
              />
            </Col>
            <Col sm={12} md={2}>
              <button type="button" aria-label="add data balita button"><Link to="/posyandus-data/add-posyandu"><FontAwesomeIcon icon={faPlusCircle} /></Link></button>
            </Col>
          </Row>
          <PosyanduList posyandus={posyandus} />
        </Container>
      </div>
    );
  }
}

export default PosyanduDataPageWrapper;
