import React from "react";
import styled from "styled-components";

const ProgramDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3em;
`;

const ProgramImageSkeleton = styled.div`
  min-height: 25rem;
  min-width: 30%;
  background: #606060;
`;

const ProgramInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const ProgramTitleSkeleton = styled.div`
  background: #606060;
  min-height: 2.5rem;
  width: 15rem;
  margin-bottom: 0.8rem;
`;

const MetaDataSkeleton = styled.div`
  background: #606060;
  min-height: 2rem;
  width: 25rem;
`;
const SynopsisSkeleton = styled.p`
  background: #606060;
  width: 40rem;
  min-height: 10rem;
  margin-top: 1rem;
`;

const ProgramDetailsSkeleton = () => {
  return(
    <ProgramDetailsContainer data-testid="skeleton">
      <ProgramImageSkeleton></ProgramImageSkeleton>
      <ProgramInformation>
       <ProgramTitleSkeleton></ProgramTitleSkeleton>
        <MetaDataSkeleton></MetaDataSkeleton>
        <SynopsisSkeleton></SynopsisSkeleton>
      </ProgramInformation>
    </ProgramDetailsContainer>
  );
};

export default ProgramDetailsSkeleton;