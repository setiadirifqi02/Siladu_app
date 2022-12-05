/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { editPosyandu } from '../utils/local-data-posyandu';
import useInput from '../hooks/useInput';

function PosyanduEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [namePosyandu, onNamePosyanduChange] = useInput('');
  const [leader, onLeaderChange] = useInput('');
  const [coLeader, onCoLeaderChange] = useInput('');
  const [secretary, onSecretaryChange] = useInput('');
  const [treasurer, onTreasurerChange] = useInput('');
  const [address, onAddressChange] = useInput('');
  const [eventDate, onEventDateChange] = useInput('');

  const onSaveHandler = (event) => {
    event.preventDefault();

    editPosyandu({
      id,
      namePosyandu,
      address,
      leader,
      coLeader,
      secretary,
      treasurer,
      eventDate,
    });
    navigate(`/posyandu-data/${id}`);
  };

  return (
    <div className="add-new-posyandu__input">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Ubah Data Posyandu
          </h1>
        </div>
      </div>
      <Container>
        <Form className="mt-5" onSubmit={onSaveHandler}>
          <h4 className="py-4">Informasi Posyandu</h4>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nama Posyandu</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama Posyandu" value={namePosyandu} onChange={onNamePosyanduChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Ketua</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama Ketua" value={leader} onChange={onLeaderChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Wakil Ketua</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan Wakil Ketua" value={coLeader} onChange={onCoLeaderChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Sekretaris</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan Sekretaris" value={secretary} onChange={onSecretaryChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Bendahara</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama Bendahara" value={treasurer} onChange={onTreasurerChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Tanggal Kegiatan</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan Tanggal Kegiatan" value={eventDate} onChange={onEventDateChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Alamat</Form.Label>
            <Col md={6}>
              <Form.Control as="textarea" rows="4" type="text" placeholder="Masukkan Alamat" value={address} onChange={onAddressChange} />
            </Col>
          </Form.Group>
          <Row>
            <Col xs={3} sm={3} md={2} lg={1}>
              <Button type="submit" variant="primary" className="my-2">Save</Button>
            </Col>
            <Col xs={3} sm={3} md={2} lg={1}>
              <Button as={Link} to="/posyandus-data" type="button" variant="primary" className="my-2">Cancel</Button>
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

export default PosyanduEditPage;
