import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeSkeleton from "./HomeSkeleton";
import ImageCarousel from "../../components/ImageCarousel";

const ErrorContainer = styled.div`
  margin-top: 2em;
  font-weight: 600;
  color: #606060;
  font-size: 1.5em;
`;

const ERROR_MESSAGE = 'An unknown error occured. Please try again later';
const Home = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [programData, setProgramData] = useState(null);
  const MAX_IMAGES = 6;

  useEffect(() => {
    setLoading(true);
    const fetchData = async() => {
      try {
        const response = await fetch('./data.json', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }});
        if(!response.ok){
          throw new Error(ERROR_MESSAGE);
        }
        let jsonData = await response.json();
        setProgramData(jsonData);
        setError(null);
      } catch(error){
        setError(error.message);
        setProgramData(null);
      } finally {
        setLoading(false);
      }
    };
    const timer = setTimeout(() => {
      setLoading(false);
      fetchData();
    }, 2000);
    return(() => clearTimeout(timer));
  }, []);
  return (
  <div className="home-page-content">
    {loading && <HomeSkeleton />}
    {error && (<ErrorContainer  data-testid="error-container">{error}</ErrorContainer>)}
    {programData && !error && (
      <ImageCarousel slides={programData} show={MAX_IMAGES}></ImageCarousel>
    )}
  </div>
  );
};

export default Home;