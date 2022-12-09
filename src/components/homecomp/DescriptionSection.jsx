/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, Container } from 'react-bootstrap';

function DescriptionSection() {
  return (
    <div className="home-page__description text-center text-white py-5">
      <Container md="true" className="w-75">
        <h2>Deskripsi</h2>
        <div className="mx-auto subheading-line mt-4" />
        <p className="py-3">
          Selamat datang di Aplikasi Sistem Laporan Posyandu atau Siladu.
          Anda dapat melihat, mencari dan mengolah data Posyandu
          secara digital melalui aplikasi website ini.
        </p>
        <Button className="btn btn-md btn-primary" href="#overview">Lihat Detail</Button>
      </Container>
    </div>
  );
}

export default DescriptionSection;
