/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="text-center text-white py-5">
        <h2>CareApp</h2>
        <div className="mx-auto subheading-line mt-4" />
      </div>
      <Row className="mb-3">
        <Col xl={12} xxl={12} className="text-center text-white">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, corrupti!</p>
          <Nav className="justify-content-center py-4 fw-semibold text-capitalize">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Care</Nav.Link>
            <Nav.Link>Health Tips</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
          </Nav>
        </Col>

        <div className="copyright-text text-center text-white border-top py-3">
          <p className="fs-6 fw-light">Made by C22-241 Team &copy; 2022</p>
        </div>

      </Row>

    </div>
  );
}

export default Footer;
