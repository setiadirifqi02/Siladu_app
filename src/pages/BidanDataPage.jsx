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
import BidanList from '../components/bidancomps/BidanList';
import SearchBar from '../components/SearchBar';
import { getAllBidan } from '../utils/local-data-bidan';

function BidanDataPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <BidanDataPage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class BidanDataPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bidans: getAllBidan(),
      keyword: props.defaultKeyword || '',
      placeholder: 'Masukan Nama Bidan...',
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
    const bidans = this.state.bidans.filter((bidan) => {
      return bidan.bidanName.toLowerCase().includes(
        this.state.keyword.toLowerCase(),
      );
    });
    return (
      <div className="bidans-data">
        <div className="jumbotron jumbotron-fluid py-5 text-white">
          <div className="container mt-5">
            <h1 className="display-4">Data Bidan</h1>
            <p className="lead">Menampilkan infomasi semua Bidan-bidan yang terdapat di Kelurahan Majakerta .</p>
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
              <button type="button" aria-label="add data balita button">
                <Link to="/bidans-data/add-bidan">
                  <FontAwesomeIcon icon={faPlusCircle} />
                </Link>
              </button>
            </Col>
          </Row>
          <BidanList bidans={bidans} />
        </Container>
      </div>
    );
  }
}

export default BidanDataPageWrapper;
