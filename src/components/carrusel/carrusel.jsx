import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Carrusel = (props) => {

  const images = [1,2,3,4,5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));
  
  return (
    <Carousel images={images} style={{ height: 300, width: 500 }} />
  );
};

export default Carrusel;