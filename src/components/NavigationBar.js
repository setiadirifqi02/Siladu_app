/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';

function NavigationBar() {
  return (
    <div className="navigation-bar sticky-top">
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar-dark">
          <Container sm>
            <Navbar.Brand className="text-capitalize"><Link to="/">CareApp </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CareApp
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link href="#action2">Care</Nav.Link>
                  <Nav.Link href="#action2">Health Tips </Nav.Link>

                  <Nav.Link><Link to="/aboutus">About Us</Link></Nav.Link>

                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavigationBar;
