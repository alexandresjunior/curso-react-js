import React from "react";

const CarouselImages = ({ images }) => {
  return (
    <div className="carousel-inner">
      {images?.map((image, index) => {
        let isActive = index === 0 ? "active" : "";

        return (
          <div className={`carousel-item ${isActive}`} key={index}>
            <img src={image.link} className="d-block w-100" alt={images.legenda} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{image.legenda}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselImages;
