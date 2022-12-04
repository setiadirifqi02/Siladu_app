/* eslint-disable react/prop-types */
import React from 'react';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Row,
  Col,
  Table,
} from 'react-bootstrap';
import ActionDeleteButton from '../ActionDeleteButton';
import ActionEditButton from '../ActionEditButton';

function BidanDetail({
  bidanName,
  bidanPhoneNumber,
  address,
  id,
  onDelete,
  onUpdate,
}) {
  return (
    <div className="bidan-detail">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Informasi Bidan&nbsp;
            <span>{bidanName}</span>
          </h1>
          <p className="lead">
            Menampilkan informasi mengenai Bidan&nbsp;
            {bidanName}
            &nbsp;yang terdapat di Kelurahan Majakerta
          </p>
        </div>
      </div>
      <Container className="py-5 text-black">
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="order-sm-2 order-md-1">
            <h4 className="py-4">Informasi Bidan</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Nama Bidan: </td>
                  <td>{bidanName}</td>
                </tr>
                <tr>
                  <td>Nomor Telepon: </td>
                  <td>{bidanPhoneNumber}</td>
                </tr>
                <tr>
                  <td>Alamat: </td>
                  <td>{address}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={6} className="text-center py-4 order-sm-1 order-md-2">
            <FontAwesomeIcon icon={faUserDoctor} className="fa-custom-style-2" />
            <Row className="justify-content-center action-button py-3 px-3 mt-3">
              <Col xs={12} sm={12} md={12} lg={3} />
              <Col xs={6} sm={6} md={6} lg={3}>
                <ActionDeleteButton id={id} onDelete={onDelete} />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                <ActionEditButton id={id} onUpdate={onUpdate} />
              </Col>
              <Col xs={12} sm={12} md={12} lg={3} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BidanDetail;
