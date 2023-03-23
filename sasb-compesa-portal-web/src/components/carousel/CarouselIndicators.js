import React from "react";

const CarouselIndicators = ({ target, images }) => {
  return (
    <div className="carousel-indicators">
      {images?.map((image, index) => {
        let isActive = index === 0 ? "active" : "";
        let isCurrent = index === 0 ? "true" : "";

        return (
          <button
            type="button"
            data-bs-target={`#${target}`}
            data-bs-slide-to={index}
            className={isActive}
            aria-current={isCurrent}
            aria-label={`Slide ${index + 1}`}
            key={index}
          ></button>
        );
      })}
    </div>
  );
};

export default CarouselIndicators;
