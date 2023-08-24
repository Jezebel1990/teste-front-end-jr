import React from 'react'
import "./styles/Carousel.scss";

const Carousel = () => {
  return (
    <div className="carousel-slider">
    <div className="carousel">
    <div className="promotion-infos">
    <p className="title-promotion">Venha conhecer nossas promoções</p>
    <p className="subtitle-promotion">50% Off nos produtos</p>
    <button className="button-promotion">
        <a href="#see-product">Ver produto</a>
    </button>
    </div>
    </div>
    </div>
  )
}

export default Carousel;
