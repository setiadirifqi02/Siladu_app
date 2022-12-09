/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Col,
  Container,
  Row,
  Accordion,
} from 'react-bootstrap';
import overviewimg from '../../assets/Images/overview-image.jpg';

function OverView() {
  return (
    <div className="home-page__overview text-center py-5" id="overview">
      <Container>
        <h2>Overview</h2>
        <div className="mx-auto subheading-line mt-4 mb-4" />
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="overview-picture py-4">
              <img className="d-block w-100" src={overviewimg} alt="overview pict" />

            </div>

          </Col>
          <Col xs={12} md={6}>
            <div className="overview-content py-4">
              <h4>Tentang Aplikasi</h4>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    1. Apa itu aplikasi Siladu?
                  </Accordion.Header>
                  <Accordion.Body className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
                    blanditiis error omnis suscipit nihil, quis officiis consequatur ex,
                    maxime debitis unde culpa saepe cupiditate corrupti aut cumque tempora.
                    Exercitationem, quis.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>2. Untuk siapa aplikasi Siladu ini dibuat?</Accordion.Header>
                  <Accordion.Body className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa reprehenderit suscipit ullam optio. Tempora aliquid enim,
                    totam nihil sunt hic voluptate esse reiciendis tempore
                    perferendis perspiciatis illum,repellat sequi facere?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>3. Kapan saja kita dapat menggunakan Siladu?</Accordion.Header>
                  <Accordion.Body className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa reprehenderit suscipit ullam optio.
                    Tempora aliquid enim, totam nihil sunt hic voluptate esse reiciendis
                    tempore perferendis perspiciatis illum, repellat sequi facere?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>4. Dimana kita dapat menggunakan Siladu?</Accordion.Header>
                  <Accordion.Body className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa reprehenderit suscipit ullam optio.
                    Tempora aliquid enim, totam nihil sunt hic voluptate esse reiciendis
                    tempore perferendis perspiciatis illum, repellat sequi facere?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>5. Mengapa aplikasi Siladu ini penting?</Accordion.Header>
                  <Accordion.Body className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa reprehenderit suscipit ullam optio. Tempora aliquid enim,
                    totam nihil sunt hic voluptate esse reiciendis tempore
                    perferendis perspiciatis illum, repellat sequi facere?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    5. Bagaimana cara kerja dari aplikasi Siladu ini berjalan?
                  </Accordion.Header>
                  <Accordion.Body className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa reprehenderit suscipit ullam optio. Tempora aliquid enim,
                    totam nihil sunt hic voluptate esse reiciendis tempore
                    perferendis perspiciatis illum, repellat sequi facere?
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OverView;
