/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ArticleItem({
  title,
  description,
  url,
  urlToImage,
}) {
  return (
    <div className="articles-item">
      <Card className="mt-4 h-100">
        <Card.Body>
          <img className="article-image mb-4" src={urlToImage} alt={urlToImage} />
          <Card.Title>
            <a className="fs-6" href={url}>{title}</a>
          </Card.Title>
          <p className="lead mt-4 fs-6">{description}</p>

          <Button href={url} variant="primary" className="my-2 mt-4">Lihat Detail</Button>
        </Card.Body>

      </Card>
    </div>
  );
}

export default ArticleItem;
