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
import { editParent } from '../utils/local-data-parent';
import useInput from '../hooks/useInput';

function EditParentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [momName, onMomNameChange] = useInput('');
  const [momPhoneNumber, onMomPhoneNumberChange] = useInput('');
  const [momJob, onMomJobChange] = useInput('');
  const [dadName, onDadNameChange] = useInput('');
  const [dadPhoneNumber, onDadPhoneNumberChange] = useInput('');
  const [phoneNumber, onPhoneNumberChange] = useInput('');
  const [dadJob, onDadJobChange] = useInput('');
  const [address, onAddressChange] = useInput('');

  const onSaveHandler = (event) => {
    event.preventDefault();

    editParent({
      id,
      momName,
      momPhoneNumber,
      momJob,
      dadName,
      dadPhoneNumber,
      dadJob,
      phoneNumber,
      address,
    });
    navigate(`/parents-data/${id}`);
  };

  return (
    <div className="add-new-parent__input">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Ubah Data Orang Tua
          </h1>
        </div>
      </div>
      <Container>
        <Form className="mt-5" onSubmit={onSaveHandler}>
          <h4 className="py-4">Informasi Ibu Balita</h4>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nama Ibu</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama ibu" value={momName} onChange={onMomNameChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Pekerjaan Ibu</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan pekerjaan ibu" value={momJob} onChange={onMomJobChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nomor Telephone</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nomor telephone Ibu" value={momPhoneNumber} onChange={onMomPhoneNumberChange} />
            </Col>
          </Form.Group>
          <h4 className="py-4">Informasi Ayah Balita</h4>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nama Ayah</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama Ayah" value={dadName} onChange={onDadNameChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Pekerjaan Ayah</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan pekerjaan Ayah" value={dadJob} onChange={onDadJobChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nomor Telephone</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nomor telephone Ayah" value={dadPhoneNumber} onChange={onDadPhoneNumberChange} />
            </Col>
          </Form.Group>
          <h4 className="py-4">Informasi Lainnya</h4>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Telephone Rumah</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nomo telepon rumah" value={phoneNumber} onChange={onPhoneNumberChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Alamat</Form.Label>
            <Col md={6}>
              <Form.Control as="textarea" rows="4" type="text" placeholder="Masukkan alamat" value={address} onChange={onAddressChange} />
            </Col>
          </Form.Group>
          <Row>
            <Col xs={3} sm={3} md={2} lg={1}>
              <Button type="submit" variant="primary" className="my-2">Save</Button>
            </Col>
            <Col xs={3} sm={3} md={2} lg={1}>
              <Button as={Link} to="/parents-data" type="button" variant="primary" className="my-2">Cancel</Button>
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

export default EditParentPage;
