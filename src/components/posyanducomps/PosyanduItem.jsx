/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PosyanduItem({
  id,
  namePosyandu,
  leader,
  eventDate,
  address,
}) {
  return (
    <div className="posyandu-item">
      <Card className="posyandu-item-card mt-4" style={{ width: '24rem' }}>
        <Card.Body>
          <FontAwesomeIcon icon={faHospitalUser} className="fa-custom-style" />
          <div className="card-line" />
          <Card.Title className="mt-4 mb-3">{namePosyandu}</Card.Title>
          <table className="mb-4 fs-6 fw-semibold">
            <tbody>
              <tr>
                <td>Ketua</td>
                <td className="ps-3">:&nbsp;{leader}</td>
              </tr>
              <tr>
                <td>Tgl Kegiatan</td>
                <td className="ps-3">:&nbsp;{eventDate}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td className="ps-3">:&nbsp;{address}</td>
              </tr>
            </tbody>
          </table>
          <Button as={Link} to={`/posyandu-data/${id}`} variant="primary" className="my-2">Lihat Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PosyanduItem;
