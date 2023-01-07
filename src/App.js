// import React, {useState} from 'react'
import ReactDOM from 'react-dom';
// import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Navhorizontale from './components/Navhorizontale';
import Navverticale from './components/Navverticale';
import Router from './Router';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  min-height:934px;
`


function App() {

  ReactDOM.render(
    <BrowserRouter>
      <Navhorizontale />
     
      <Navverticale />
      <Router />
     
    </BrowserRouter>,
    document.getElementById("root")
  ); 
}

export default App;

