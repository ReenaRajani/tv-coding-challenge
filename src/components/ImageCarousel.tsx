import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Slide {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  rating: string;
  genre: string;
  year: number;
  language: string;
};

interface CarouselProps{
  slides: Array<Slide>;
  show: number;
};

const CarouselContainer = styled.div`
  padding-top: 3em;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40rem;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;
const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: scroll;
  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .show-2 > * {
    width: 50%;
  }
  .show-3 > * {
    width: calc(100% / 3);
  }
  .show-4 > * {
    width: calc(100% / 3);
  }

  .show-5 > * {
    width: calc(100% / 5);
  }
  .show-6 > * {
    width: calc(100% / 6);
  }
`;

const SliderButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  background-color: white;
  opacity: 0.6;
  border: 1px solid #ddd;
`;

const LeftButton = styled(SliderButton)`
  left: 1em;
`;

const RightButton = styled(SliderButton)`
  right: 1em;
`;

const CarouselImage = styled.img`
  height: 25rem;
  width: calc(100% / 6);
  margin: 0.5rem;
  object-fit: cover;

  &:hover {
    border: 2px solid blue;
  }

  @media only screen and (max-width: 400px){
    width: calc(100% / 3);
  }

  @media only screen and (max-width: 780px) and (min-width: 400px){
    width: calc(100% / 4);
  }
`;

const ImageCarousel = (props: CarouselProps) => {
  const {slides, show } = props;
  let navigate = useNavigate();
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(show);
  const [slidesLength, setSlidesLength] = useState(slides.length);

  useEffect(() => {
    setSlidesLength(slides.length);
  },[slides, show]);

  const moveNext = () => {
    if(finish < slidesLength){
      setStart(start + show);
      setFinish(finish + show);
    }
  }

  const movePrevious = () => {
    if(finish < slidesLength && start > 0){
      setStart(start - show);
      setFinish(finish - show);
    }
  }

  function handleKeyDownListener(event: KeyboardEvent){
    if (event.key === 'ArrowLeft') {
      movePrevious();
    } else if (event.key=== 'ArrowRight') {
      moveNext();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      handleKeyDownListener(event)
    }, false);
    return () => {
      window.removeEventListener('keydown', handleKeyDownListener);
    }
  },[start, finish]);

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselContentWrapper>
          <CarouselContent className={`show-${show}`}>
              {slides.slice(start, finish).map((slide, imgindex)=>(
                  <CarouselImage
                    key={imgindex}
                    src={slide.image}
                    alt={slide.title}
                    data-testid="carousel-image"
                    onClick={
                      () => navigate(`/details/${slide.title}`,
                        { state: { data: {...slide} }}
                      )
                    }
                  />
              ))}
          </CarouselContent>
        </CarouselContentWrapper>
      </CarouselWrapper> 
    </CarouselContainer>
  );
};

export default ImageCarousel;