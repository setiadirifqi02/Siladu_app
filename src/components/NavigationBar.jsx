/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';

function NavigationBar() {
  return (
    <div className="navigation-bar fixed-top">
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 py-2 navbar-dark">
          <Container md="true">
            <Navbar.Brand className="text-capitalize"><Link to="/">Siladu </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Siladu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/children-data" className="text-capitalize">Data Balita</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/parents-data" className="text-capitalize">
                      Data Parent
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/posyandus-data" className="text-capitalize">Data Posyandu</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/bidans-data" className="text-capitalize">
                      Data Bidan
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/health-article">Health Articles </Nav.Link>
                  <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavigationBar;
