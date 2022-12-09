import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import AboutUsImage1 from '../assets/Images/about-us-images/about-image-1.jpg';

function AboutUsPage() {
  return (
    <div className="about-page text-center" id="about-page">
      <div className="about-page__header py-5">
        <h2 className="about-page__header-title text-white text-capitalize mt-4">C22-241 Team</h2>
        <div className="about-page__header-decriptiion text-white text-center  mx-auto mt-4 px-5 w-50">
          <h5>
            Perkenalakan anggota-anggota Tim kami dibalik project yang memungkinkan
            aplikasi website Siladu ini berjalan dan dapat digunakan oleh pengguna.
          </h5>
        </div>
      </div>

      <Container className="about-page__main py-5">
        <Row className="about-page__line mt-4 py-4 align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <div className="about-page__main-images">
              <img className="img-fluid" src={AboutUsImage1} alt="Profile Pict 1" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="about-page-main-desciption text-center mt-4">
              <h4>Halimah Tussakdiyah</h4>

              <p className="lead fst-italic">
                <FontAwesomeIcon icon={faQuoteLeft} className="faquote" />
                Hallo!, Perkenalkan nama saya Halimah Tussakdiyah bisa dipanggil Nadia.
                Dari Akademi Manjemen Informatika dan Komputer Taruna.
                <FontAwesomeIcon icon={faQuoteRight} className="faquote" />

              </p>
            </div>
          </Col>
        </Row>

        <Row className="about-page__line mt-4 py-4  align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <div className="about-page-main-desciption text-center mt-4">
              <h4>Roni Rusmana</h4>

              <p className="lead fst-italic">
                <FontAwesomeIcon icon={faQuoteLeft} className="faquote" />
                Hi Saya Roni Rusamana.Saya mengikuti STudi Indipendent Bersertifikat
                Batch 3 Dicoding kelas Pengembang Front-end Web dan React.
                <FontAwesomeIcon icon={faQuoteRight} className="faquote" />

              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>

            <div className="about-page__main-images">
              <img className="img-fluid" src={AboutUsImage1} alt="Profile Pict 1" />
            </div>
          </Col>
        </Row>

        <Row className="about-page__line mt-4 py-4 align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <div className="about-page__main-images">
              <img className="img-fluid" src={AboutUsImage1} alt="Profile Pict 1" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="about-page-main-desciption text-center mt-4">
              <h4>Rifqi Setiadi</h4>

              <p className="lead fst-italic">
                <FontAwesomeIcon icon={faQuoteLeft} className="faquote" />
                Hi, Saya Rifqi Setiadi, saya dari Univeristas Amikom Purwokerto.
                Mengembangkan dan membangun website yang interaktif dengan UI yang unik dan menarik,
                dengan UX yang terbaik adalah bidang yang sedang saya tekuni.
                <FontAwesomeIcon icon={faQuoteRight} className="faquote" />

              </p>
            </div>
          </Col>
        </Row>

        <Row className="about-page__line mt-4 py-4  align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <div className="about-page-main-desciption text-center mt-4">
              <h4>Muhammad Fazrul Maulana</h4>

              <p className="lead fst-italic">
                <FontAwesomeIcon icon={faQuoteLeft} className="faquote" />
                Perkenalkan nama saya Muhammad Fazrul Maulana Universits Tarumanagara Jakarta.
                Saya mengikuti SIB Batch 3 Dicoding kelas Pengembang Front-end Web dan React.
                <FontAwesomeIcon icon={faQuoteRight} className="faquote" />

              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>

            <div className="about-page__main-images">
              <img className="img-fluid" src={AboutUsImage1} alt="Profile Pict 1" />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default AboutUsPage;
