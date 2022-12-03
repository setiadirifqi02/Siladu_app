/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ParentItem({
  id,
  momName,
  dadName,
  phoneNumber,
}) {
  return (
    <div className="parent-item">
      <Card className="parent-item-card mt-4" style={{ width: '18rem' }}>
        <Card.Body>
          <FontAwesomeIcon icon={faHouseChimneyUser} className="fa-custom-style" />
          <Card.Title className="mt-4 mb-3">
            Data Keluarga
          </Card.Title>
          <table className="mb-4 fs-6 fw-semibold">
            <tbody>
              <tr>
                <td>Nama Ibu</td>
                <td className="ps-3">:&nbsp;{momName}</td>
              </tr>
              <tr>
                <td> Nama Ayah : </td>
                <td className="ps-3">:&nbsp;{dadName}</td>
              </tr>
              <tr>
                <td>Phone : </td>
                <td className="ps-3">:&nbsp;{phoneNumber}</td>
              </tr>
            </tbody>
          </table>
          <Button as={Link} to={`/parents-data/${id}`} variant="primary" className="my-2">Lihat Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ParentItem;
