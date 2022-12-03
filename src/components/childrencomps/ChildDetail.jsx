/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Row,
  Col,
  Table,
  Button,
} from 'react-bootstrap';

function ChildDetail({
  name,
  gender,
  birthPlace,
  birthDate,
  height,
  weight,
  momName,
  dadName,
  posyanduId,
  posyanduName,
  bidanName,
  vaccination,
  detail,
  parentId,
}) {
  return (
    <div className="children-detail">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Informasi Dek&nbsp;
            <span>{name}</span>
          </h1>
          <p className="lead">
            Disini anda dapat melihat semua informasi ada tentang Dek&nbsp;
            {name}
          </p>
        </div>
      </div>
      <Container className="py-5 text-black">
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="order-sm-2 order-md-1">
            <h4 className="py-4">Informasi Balita</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Jenis Kelamin: </td>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <td>Tempat Lahir: </td>
                  <td>{birthPlace}</td>
                </tr>
                <tr>
                  <td>Tanggal Lahir: </td>
                  <td>{birthDate}</td>
                </tr>
                <tr>
                  <td>Tinggi Badan: </td>
                  <td>{height}</td>
                </tr>
                <tr>
                  <td>Berat Badan: </td>
                  <td>{weight}</td>
                </tr>
              </tbody>
            </Table>

            <h4 className="py-4">Informasi Orang Tua</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Nama Ibu: </td>
                  <td>{momName}</td>
                </tr>
                <tr>
                  <td>Nama Ayah: </td>
                  <td>{dadName}</td>
                </tr>
              </tbody>
            </Table>
            <Button
              as={Link}
              to={`/parents-data/${parentId}`}
              variant="primary"
              arial-label="lihat detail informasi orang tua balita button"
              className="my-2"
            >
              Lihat Detail
            </Button>

            <h4 className="py-4">Informasi Imunisasi</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Nama Posyandu: </td>
                  <td>{posyanduName}</td>
                </tr>
              </tbody>
            </Table>
            <Button
              as={Link}
              to={`/posyandu-data/${posyanduId}`}
              variant="primary"
              arial-label="lihat detail informasi orang tua balita button"
              className="my-2"
            >
              Lihat Detail
            </Button>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Jenis Imunisasi: </td>
                  <td>{vaccination}</td>
                </tr>
                <tr>
                  <td>Nama bidan: </td>
                  <td>{bidanName}</td>
                </tr>
                <tr>
                  <td>Keterangan </td>
                  <td>{detail}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={6} className="text-center py-4 order-sm-1 order-md-2">
            <FontAwesomeIcon icon={faUserCircle} className="fa-custom-style-2" />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default ChildDetail;
