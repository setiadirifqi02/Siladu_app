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

function ChildInput({ addChild }) {
  const [name, onNameChange] = useInput('');
  const [gender, onGenderChange] = useInput('');
  const [birthPlace, onBirthPlaceChange] = useInput('');
  const [birthDate, onBirthDateChange] = useInput('');
  const [height, onHeightChange] = useInput('');
  const [weight, onWeightChange] = useInput('');
  const [momName, onMomNameChange] = useInput('');
  const [dadName, onDadNameChange] = useInput('');
  const [posyanduName, onPosyanduNameChange] = useInput('');
  const [bidanName, onBidanNameChange] = useInput('');
  const [vaccination, onVaccinationChange] = useInput('');
  const [detail, onDetailChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    addChild({
      name,
      gender,
      birthPlace,
      birthDate,
      height,
      weight,
      momName,
      dadName,
      posyanduName,
      bidanName,
      vaccination,
      detail,
    });
  };

  return (
    <div className="add-new-child__input">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Tambahkan Data Orang Tua Balita Baru
          </h1>
        </div>
      </div>
      <Container>
        <Form className="mt-5" onSubmit={onSubmitHandler}>
          <h4 className="py-4">Informasi Balita</h4>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nama Balita</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama Balita" value={name} onChange={onNameChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Jenis Kelamin</Form.Label>
            <Col md={6}>
              <Form.Select value={gender} onChange={onGenderChange}>
                <option>&nbsp;</option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Tempat Lahir</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan tempat Lahir Balita" value={birthPlace} onChange={onBirthPlaceChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Tanggal Lahir</Form.Label>
            <Col md={6}>
              <Form.Control type="date" placeholder="Masukkan Tanggal Lahir Balita" value={birthDate} onChange={onBirthDateChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Tinggi</Form.Label>
            <Col md={6}>
              <Form.Control type="number" placeholder="Masukkan tinggi badan Balita" value={height} onChange={onHeightChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Berat Badan</Form.Label>
            <Col md={6}>
              <Form.Control type="number" placeholder="Masukkan berat badan Balita" value={weight} onChange={onWeightChange} />
            </Col>
          </Form.Group>
          <h4 className="py-4">Informasi Orang Tua Balita</h4>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nama Ibu</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama Ibu" value={momName} onChange={onMomNameChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nama Ayah</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama Ayah" value={dadName} onChange={onDadNameChange} />
            </Col>
          </Form.Group>
          <h4 className="py-4">Informasi Imunisasi</h4>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nama Posyandu</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nama Posyandu" value={posyanduName} onChange={onPosyanduNameChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Nama Bidan</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan nam Bidan" value={bidanName} onChange={onBidanNameChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Imunisasi</Form.Label>
            <Col md={6}>
              <Form.Control type="text" placeholder="Masukkan imunisasi diberikan" value={vaccination} onChange={onVaccinationChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="ControlInput1">
            <Form.Label>Keterangan</Form.Label>
            <Col md={6}>
              <Form.Control type="text" rows="4" as="textarea" placeholder="Keterangan lengkap tentang imuniasi yang diberikan" value={detail} onChange={onDetailChange} />
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary" className="my-2">Submit</Button>
        </Form>
      </Container>
      <div className="empty-div">
          &nbsp;
      </div>

    </div>
  );
}

export default ChildInput;
