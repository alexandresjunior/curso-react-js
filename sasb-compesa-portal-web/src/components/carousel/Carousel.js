import React from "react";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";
import CarouselImages from "./CarouselImages";

const Carousel = ({
  target,
  images,
  slideStyle,
  showIndicators = true,
  showControls = true,
}) => {
  return (
    <div
      id={target}
      className={`carousel slide carousel-${slideStyle}`}
      data-bs-ride="carousel"
    >
      {showIndicators && <CarouselIndicators target={target} images={images} />}
      <CarouselImages images={images} />
      {showControls && <CarouselControls target={target} />}
    </div>
  );
};

export default Carousel;
