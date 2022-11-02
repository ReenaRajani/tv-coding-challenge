import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {
  Routes,
  Route
} from "react-router-dom";

import Header from './Header';
import ProgramDetails from "../pages/Details/ProgramDetails";
import Home from '../pages/Home';

import GlobalStyle from "../styles/global";

const AppWrapper = styled.section`
  padding: 4em;
  background: black;
  color: white;
`;

const App = () => {
  return (
    <AppWrapper>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:programId" element={<ProgramDetails />} / >
        </Routes>
    </AppWrapper>
  )
}

  export default App;