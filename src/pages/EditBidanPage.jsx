/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { editBidan } from '../utils/local-data-bidan';

function BidanInputEditWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <BidanInputEdit id={id} navigate={navigate} />;
}

class BidanInputEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bidanName: '',
      bidanPhoneNumber: '',
      address: '',
    };

    this.onBidanNameChangeHandler = this.onBidanNameChangeHandler.bind(this);
    this.onBidanPhoneNumberChangeHandler = this.onBidanPhoneNumberChangeHandler.bind(this);
    this.onAddressChangeHandler = this.onAddressChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onBidanNameChangeHandler(event) {
    this.setState(() => {
      return {
        bidanName: event.target.value,
      };
    });
  }

  onBidanPhoneNumberChangeHandler(event) {
    this.setState(() => {
      return {
        bidanPhoneNumber: event.target.value,
      };
    });
  }

  onAddressChangeHandler(event) {
    this.setState(() => {
      return {
        address: event.target.value,
      };
    });
  }

  onSubmitEventHandler() {
    const id = this.props.id;
    const {
      bidanName,
      bidanPhoneNumber,
      address,
    } = this.state;
    editBidan({
      id,
      bidanName,
      bidanPhoneNumber,
      address,
    });
    this.props.navigate(`/bidans-data/${id}`);
  }

  render() {
    return (
      <div className="edit-bidan__input">
        <div className="jumbotron jumbotron-fluid py-5 text-white">
          <div className="container mt-5">
            <h1 className="display-6">
              Ubah Data Bidan
            </h1>
          </div>
        </div>
        <Container>
          <Form className="mt-5">
            <h4 className="py-4">Informasi Bidan</h4>
            <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
              <Form.Label>Nama Bidan</Form.Label>
              <Col md={6}>
                <Form.Control type="text" placeholder="Masukkan nama Bidan" value={this.state.bidanName} onChange={this.onBidanNameChangeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
              <Form.Label>Nomor Telephone</Form.Label>
              <Col md={6}>
                <Form.Control type="number" placeholder="Masukkan nomor Telephon" value={this.state.bidanPhoneNumber} onChange={this.onBidanPhoneNumberChangeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
              <Form.Label>Alamat</Form.Label>
              <Col md={6}>
                <Form.Control as="textarea" rows="4" type="text" placeholder="Masukkan Alamat" value={this.state.address} onChange={this.onAddressChangeHandler} />
              </Col>
            </Form.Group>
            <Row>
              <Col xs={3} sm={3} md={2} lg={1}>
                <Button type="button" variant="primary" className="my-2" onClick={() => this.onSubmitEventHandler()}>Submit</Button>
              </Col>
              <Col xs={3} sm={3} md={2} lg={1}>
                <Button as={Link} to="/bidans-data" type="button" variant="primary" className="my-2">Cancel</Button>
              </Col>
            </Row>
          </Form>
        </Container>
        <div className="empty-div">
          &nbsp;
        </div>
      </div>

    );
  }
}

export default BidanInputEditWrapper;
