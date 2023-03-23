import React from "react";

const CarouselControls = ({ target }) => {
  return (
    <>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${target}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${target}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </>
  );
};

export default CarouselControls;
