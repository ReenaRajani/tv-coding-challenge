import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeSkeleton from "./HomeSkeleton";
import ImageCarousel from "../../components/ImageCarousel";

const ErrorDiv = styled.div`
  margin-top: 2em;
  font-weight: 600;
  color: #606060;
`;

const Home = () => {
  const [error, setError] = useState(null);
  const [programData, setProgramData] = useState(null);
  const MAX_IMAGES = 6;

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('./data.json', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }});
        if(!response.ok){
          setError(true);
          throw new Error('An unknown error occured. Please try again later');
        }
        let jsonData = await response.json();
        setProgramData(jsonData);
        setError(null);
      } catch(error){
        setError(error.message);
        setProgramData(null);
      }
    }
    fetchData();
    console.log('--> data, error inside', programData, error )
  }, []);
  console.log('--> data, error ', programData, error )
  return (
  <div className="home-page-content">
    {error && (<ErrorDiv className="error-container" data-testId="error-container">{error}</ErrorDiv>)}
    {programData && programData.length > 0 ?
      <ImageCarousel slides={programData} show={MAX_IMAGES}></ImageCarousel>
      : <HomeSkeleton />
    }
  </div>
  );
};

export default Home;