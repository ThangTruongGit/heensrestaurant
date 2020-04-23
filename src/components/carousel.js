import React, { useState, Children } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import img1 from "../assets/images/Heens1.jpg";
import img2 from "../assets/images/Heens2.jpg";
import img3 from "../assets/images/Heens3.jpg";
import img4 from "../assets/images/Heens4.jpg";
import img5 from "../assets/images/Heens5.jpg";
import img6 from "../assets/images/Heens6.jpg";
import img7 from "../assets/images/heens7.png";

const items = [
  {
    src: img1,
    altText: "Heens Restaurant",
    caption: ""
  },
  {
    src: img2,
    altText: "Heens Restaurant",
    caption: ""
  },
  {
    src: img3,
    altText: "Heens Restaurant",
    caption: ""
  },
  {
    src: img4,
    altText: "Heens Restaurant",
    caption: ""
  },
  {
    src: img5,
    altText: "Heens Restaurant",
    caption: ""
  },
  {
    src: img6,
    altText: "Heens Restaurant",
    caption: ""
  },
  {
    src: img7,
    altText: "Heens Restaurant",
    caption: ""
  }
];

const CustomSliderItem = imgSrc => ({ children, ...props }) => {
  return (
    <div {...props} style={{ backgroundImage: `url(${imgSrc})` }}>
      {children}
    </div>
  );
};

const CarouselWrapper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        key={item.src}
        className="main-banner-item"
        tag={CustomSliderItem(item.src)}
      >
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselWrapper;
