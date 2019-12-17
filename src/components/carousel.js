import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import img1 from '../images/Heens1.jpg';
import img2 from '../images/Heens2.jpg';
import img3 from '../images/Heens3.jpg';
import img4 from '../images/Heens4.jpg';
import img5 from '../images/Heens5.jpg';
import img6 from '../images/Heens6.jpg';

const items = [{
    src: img1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }, {
    src: img2,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }, {
    src: img3,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }, {
    src: img4,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }, {
    src: img5,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }, {
    src: img6,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }];

const CarouselWrapper = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselWrapper;