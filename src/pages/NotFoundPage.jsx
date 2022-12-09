import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundPict from '../assets/Images/404-error.png';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <Container className="h-100 py-5 my-5">
        <Row className="align-items-center justify-content-center">
          <img className="d-block h-75 w-50 mb-5" src={NotFoundPict} alt="Eror-404" />
          <Col sm={12} md={12} className="text-center">
            <Button as={Link} to="/" className="btn btn-primary mt-5">Back to Home</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFoundPage;
