/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Carousel from 'react-bootstrap/Carousel';
import images1 from '../../assets/Images/images-1.jpg';
import images2 from '../../assets/Images/images-2.jpg';
import images3 from '../../assets/Images/images-3.jpg';

function HeroSlider() {
  return (
    <Carousel className="home-page__hero-slider">
      <Carousel.Item>
        <img
          className="d-block h-75 w-100"
          src={images1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-75 w-100"
          src={images2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-75 w-100"
          src={images3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Third slide label</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
