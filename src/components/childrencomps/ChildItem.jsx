/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ChildItem({
  id,
  name,
  gender,
  birthPlace,
  birthDate,
}) {
  return (
    <div className="child-item">
      <Card className="child-item-card mt-4" style={{ width: '18rem' }}>
        <Card.Body>
          <FontAwesomeIcon icon={faUserCircle} className="fa-custom-style" />
          <Card.Title className="mt-4 mb-3">{name}</Card.Title>
          <table className="mb-4 fs-6 fw-semibold">
            <tbody>
              <tr>
                <td>Jenis Kelamin</td>
                <td className="ps-3">:&nbsp;{gender}</td>
              </tr>
              <tr>
                <td> Tempat Lahir</td>
                <td className="ps-3">:&nbsp;{birthPlace}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir</td>
                <td className="ps-3">:&nbsp;{birthDate}</td>
              </tr>
            </tbody>
          </table>
          <Button as={Link} to={`/children-data/${id}`} variant="primary" className="my-2">Lihat Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ChildItem;
