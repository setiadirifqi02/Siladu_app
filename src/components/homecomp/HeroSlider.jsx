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
          <h2>Dimanapun dan Kapanpun</h2>
          <p>Kemudahan dalam Pemantauan Kesehatan Ibu & Balita</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-75 w-100"
          src={images2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Terstruktur dan Terintegrasi</h2>
          <p>Kemudahan dalam Pengelolaan data Posyandu</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-75 w-100"
          src={images3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Moderen dan Digitalisasi</h2>
          <p>
            Digitalisasi Posyandu daerah pelosok
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
