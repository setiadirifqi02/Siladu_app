/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, Container } from 'react-bootstrap';

function DescriptionSection() {
  return (
    <div className="home-page__description text-center text-white py-5">
      <Container sm className="w-50">
        <h2>Ini Deskripsi</h2>
        <div className="mx-auto subheading-line mt-4" />
        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat accusamus fuga aliquid temporibus? Impedit, doloribus.</p>
        <Button className="btn btn-md btn-primary" href="#overview">Learn More</Button>
      </Container>
    </div>
  );
}

export default DescriptionSection;
