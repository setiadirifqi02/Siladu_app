/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Row,
  Col,
  Table,
  Button,
} from 'react-bootstrap';

function PosyanduDetail({
  bidanId,
  namePosyandu,
  address,
  leader,
  coLeader,
  secretary,
  treasurer,
  eventDate,
}) {
  return (
    <div className="posyandu-detail">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Informasi Lengkap&nbsp;
            <span>{namePosyandu}</span>
          </h1>
          <p className="lead">
            Disini anda dapat melihat semua informasi mengenai posyandu&nbsp;
            {namePosyandu}
            &nbsp;yang berada di Kelurahan Majakerta.
          </p>
        </div>
      </div>
      <Container className="py-5 text-black">
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="order-sm-2 order-md-1">
            <h4 className="py-4">Informasi Kader</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Ketua: </td>
                  <td>{leader}</td>
                </tr>
                <tr>
                  <td>
                    <Button
                      as={Link}
                      to={`/bidans-data/${bidanId}`}
                      variant="primary"
                      aria-label="lihat detail informasi bidan"
                      className="my-2"
                    >
                      Lihat Detail
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Wakil Ketua: </td>
                  <td>{coLeader}</td>
                </tr>
                <tr>
                  <td>Sekretaris: </td>
                  <td>{secretary}</td>
                </tr>
                <tr>
                  <td>Bendahara: </td>
                  <td>{treasurer}</td>
                </tr>
              </tbody>
            </Table>

            <h4 className="py-4">Informasi Posyandu</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Alamat: </td>
                  <td>{address}</td>
                </tr>
                <tr>
                  <td>Tanggal Kegiatan </td>
                  <td>{eventDate}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={6} className="text-center py-4 order-sm-1 order-md-2">
            <FontAwesomeIcon icon={faHospitalUser} className=" fa-custom-style-2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PosyanduDetail;
