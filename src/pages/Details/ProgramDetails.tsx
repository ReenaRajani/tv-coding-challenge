import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom'

import ProgramDetailsSkeleton from './ProgramDetailsSkeleton';

type ProgramDetails = {
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

interface ProgramProps {
  data ?: ProgramDetails;
}

const ProgramDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3em;
`;

const ProgramImage = styled.img`
  height: 60%;
  width: 35%;
`;

const ProgramInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;

const ProgramTitle = styled.div`
  font-size: 2.5rem;
  font-style: bold;
`;

const MetaData = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const MetaFeature = styled.li`
  display : inline;
  margin-right: 0.5rem;
  ::after {
    content: '|';
    color: #606060;
    font-size: 0.9rem;
    margin-left: .3rem;
  }
  :last-child:: after {
    content: '';
    margin-left: 0;
  }
`;

const Synopsis = styled.p`
  margin-top: 1rem;
  line-height: 1.7rem;
  font-size: 1.2rem;
`;

const ProgramDetails = (props: ProgramProps) => {
  const location = useLocation();
  const { data } = location.state;
  const [loading, setLoading] = useState(false);

  // Just to show how the loading screen works
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return(() => clearTimeout(timer));
  },[]);

  return(
    <div>
       {loading ? 
       <ProgramDetailsSkeleton /> :
       <ProgramDetailsContainer>
        <ProgramImage src={data.image} className="skeleton"></ProgramImage>
        <ProgramInformation>
          <ProgramTitle className="skeleton"> {data.title}</ProgramTitle>
            <MetaData className="skeleton">
              <MetaFeature> {data.rating} </MetaFeature>
              <MetaFeature>{data.year}</MetaFeature>
              <MetaFeature> {data.genre} </MetaFeature>
              <MetaFeature> {data.language} </MetaFeature>
            </MetaData>
          <Synopsis className="skeleton">
            {data.description}
          </Synopsis>
        </ProgramInformation>
      </ProgramDetailsContainer>
      }
    </div>
  );
};

export default ProgramDetails;