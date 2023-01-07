import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import {palette} from "../theme/styledvariable"

const Title = styled.h1`
    font-size:3rem;
    color: black;
    margin: 50px;
`

const NavAccueil = styled.a`
    border:none;
    padding: 10px 20px;
    margin: 50px;
    background-color: ${palette.colorSecondary};
    border-radius: 20px;
`

export default function Accueil() {
  return (
    <main>
      <Title>Accueil</Title>
      <nav>
        <NavAccueil>
          <NavLink to="/user/12">USER 12</NavLink>
        </NavAccueil>
        <NavAccueil>
        <NavLink to="/user/18">USER 18</NavLink>
        </NavAccueil>
      </nav>
    </main>

  )
}
