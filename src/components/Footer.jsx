/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Col, Nav, Row, NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="text-center text-white py-5">
        <h2>CareApp</h2>
        <div className="mx-auto subheading-line mt-4" />
      </div>
      <Row className="mb-3">
        <Col xl={12} xxl={12} className="text-center text-white">
          <p>Capstone Project Program Studi Independent Besertifikasi Batch 3 Dicoding</p>
          <Nav className="justify-content-center py-4 fw-semibold text-capitalize">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/children-data" className="text-capitalize">Data Balita</NavDropdown.Item>
              <NavDropdown.Item className="text-capitalize">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className="text-capitalize">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-capitalize">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Health Tips</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
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
