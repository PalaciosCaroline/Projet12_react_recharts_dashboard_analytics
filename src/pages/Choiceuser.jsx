import React from 'react'
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import {palette} from "../theme/styledvariable"

const Title = styled.h1`
    font-size:3rem;
    color: black;
    margin: 50px;
`

const MainAccueil = styled.main`
  padding:68px 9% 88px 224px;
`

const NavLin = styled.a`
    border:none;
    display:inline-block;
    text-align:center;
    width:150px;
    padding: 10px 20px;
    margin: 50px;
    background-color: ${palette.colorSecondary};
    border-radius: 20px;
`

export default function Accueil() {
  return (
    <MainAccueil>
      <Title>Accueil : Choice User</Title>
      <nav>
          <NavLin href="/user/12">USER 12</NavLin>
          <NavLin href="/user/18">USER 18</NavLin>
      </nav>
    </MainAccueil>

  )
}
