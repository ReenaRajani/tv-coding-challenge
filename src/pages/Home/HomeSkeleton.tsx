import React from "react";
import styled from "styled-components";

const CarouselSkeletonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3em;
  justify-content: space-between;
`;

const CarouselSkeltonItem = styled.div`
  min-height: 25rem;
  min-width: 15%;
  background: #606060;
`;

const HomeSkeleton = () => {
  const MINIMUM_ITEMS = 6;
  return(
    <CarouselSkeletonContainer data-testid="carousel-skeleton">
     {[...Array(MINIMUM_ITEMS)].map((element, index) => <CarouselSkeltonItem key={index} />)}
    </CarouselSkeletonContainer>
  );
};

export default HomeSkeleton;