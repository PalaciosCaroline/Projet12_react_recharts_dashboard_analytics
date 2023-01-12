import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import {palette} from "../theme/styledvariable"


export default function Choiceuser() {
  return (
    <MainAccueil>
      <h1>Accueil : Choice User</h1>
      <nav>
          <NavLink to="/user/12">USER 12</NavLink>
          <NavLink to="/user/18">USER 18</NavLink>
      </nav>
    </MainAccueil>

  )
}

const MainAccueil = styled.main`
  padding:68px 9% 88px 224px;
  h1{
    font-size:3rem;
    color: black;
    margin: 50px;
  }
  a{
    border:none;
    display:inline-block;
    text-align:center;
    width:150px;
    padding: 10px 20px;
    margin: 50px;
    background-color: ${palette.colorSecondary};
    border-radius: 20px;
  }
`
