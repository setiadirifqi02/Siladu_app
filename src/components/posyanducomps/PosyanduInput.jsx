/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import useInput from '../../hooks/useInput';

function PosyanduInput({ addPosyandu }) {
  const [namePosyandu, onNamePosyanduChange] = useInput('');
  const [leader, onLeaderChange] = useInput('');
  const [coLeader, onCoLeaderChange] = useInput('');
  const [secretary, onSecretaryChange] = useInput('');
  const [treasurer, onTreasurerChange] = useInput('');
  const [address, onAddressChange] = useInput('');
  const [eventDate, onEventDateChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    addPosyandu({
      namePosyandu,
      address,
      leader,
      coLeader,
      secretary,
      treasurer,
      eventDate,
    });
  };

  return (
    <div className="add-new-posyandu__input">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Tambahkan Data Posyandu Baru
          </h1>
        </div>
      </div>
      <Container>
        <Form className="mt-5" onSubmit={onSubmitHandler}>
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
          <Button type="submit" variant="primary" className="my-2">Submit</Button>
        </Form>
      </Container>
      <div className="empty-div">
          &nbsp;
      </div>
      {/* <form onSubmit={onSubmitHandler} className="posyandu-input">
        <input type="text" placeholder="Nama"
        value={namePosyandu} onChange={onNamePosyanduChange} />
        <input type="text" placeholder="Nama" value={leader} onChange={onLeaderChange} />
        <input type="text" placeholder="Nama" value={coLeader} onChange={onCoLeaderChange} />
        <input type="text" placeholder="Nama" value={secretary} onChange={onSecretaryChange} />
        <input type="text" placeholder="Nama" value={treasurer} onChange={onTreasurerChange} />
        <input type="text" placeholder="Nama" value={address} onChange={onAddressChange} />
        <input type="text" placeholder="Nama" value={eventDate} onChange={onEventDateChange} />
        <button type="submit">submit</button>
      </form> */}
    </div>
  );
}

export default PosyanduInput;
