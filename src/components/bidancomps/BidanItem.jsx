/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ChildItem({
  id,
  bidanName,
  bidanPhoneNumber,
  address,
}) {
  return (
    <div className="bidan-item">
      <Card className="bidan-item-card mt-4" style={{ width: '24rem' }}>
        <Card.Body>
          <FontAwesomeIcon icon={faUserDoctor} className="fa-custom-style" />
          <Card.Title className="mt-4 mb-3">{bidanName}</Card.Title>
          <table className="mb-4 fs-6 fw-semibold">
            <tbody>
              <tr>
                <td>Nomor Telepon</td>
                <td className="ps-3">:&nbsp;{bidanPhoneNumber}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td className="ps-3">:&nbsp;{address}</td>
              </tr>
            </tbody>
          </table>
          <Button as={Link} to={`/bidans-data/${id}`} variant="primary" className="my-2">Lihat Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ChildItem;
