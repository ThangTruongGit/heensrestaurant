import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const CustomSliderItem = imgSrc => props => {
  return <Img fluid={imgSrc} {...props} />;
};

const CarouselWrapper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesData = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  // simplyfy images list
  const images = imagesData.allFile.nodes.map(({ id, childImageSharp }) => ({
    id,
    fluid: childImageSharp.fluid
  }));

  const next = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    setActiveIndex(newIndex);
  };

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {images.map(img => (
        <CarouselItem
          key={img.id}
          className="main-banner-item"
          tag={CustomSliderItem(img.fluid)}
        />
      ))}
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
