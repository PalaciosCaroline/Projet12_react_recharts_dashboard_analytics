// import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Choiceuser from './pages/Choiceuser'
import Dashboard from './pages/Dashboard'
import Erreur404 from './pages/Erreur404'
// import * as ReactDOM from 'react-dom/client';

import Navhorizontale from './components/Navhorizontale'
import Navverticale from './components/Navverticale/Navverticale'
import { BrowserRouter,Routes, Route} from "react-router-dom"
import './App.css'
import styled from 'styled-components'



export default function App() {
  ReactDOM.render(
    <BrowserRouter>
      <Navhorizontale />
      <Main>
        <Navverticale />
        <Routes>
          <Route index path="/" element={<Choiceuser />} />
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </Main>
    </BrowserRouter>,
    document.getElementById('root')
  )
}


const Main = styled.main`
  display: flex;
  min-height: 934px;
  height:auto;
`