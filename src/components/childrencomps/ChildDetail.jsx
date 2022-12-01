/* eslint-disable react/prop-types */
import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Row,
  Col,
  Table,
} from 'react-bootstrap';

function ChildDetail({
  name,
  gender,
  birthPlace,
  birthDate,
  momName,
  dadName,
  posyanduName,
  bidanName,
  vaccination,
  detail,

}) {
  return (
    <div className="children-detail">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Hi, &nbsp;
            <span>{name}</span>
          </h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
      <Container className="py-5 text-black">
        <Row className="justify-content-center">
          <Col sm={12} md={6}>
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

            <h4 className="py-4">Informasi Imunisasi</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Nama Posyandu: </td>
                  <td>{posyanduName}</td>
                </tr>
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
          <Col xs={12} sm={6} className="text-center py-4">
            <FontAwesomeIcon icon={faUserCircle} className="child-detail faUserCircle" />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default ChildDetail;
