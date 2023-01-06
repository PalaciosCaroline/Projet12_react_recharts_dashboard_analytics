
import React from 'react'
import { NavLink } from 'react-router-dom'
import iconlogo from './../assets/logo_sportseeSVG.svg'
import styled from "styled-components";
import {palette} from "./../utils/styledvariable"



const UlHeader = styled.ul`
  font-size: 1.4rem;
padding: 20px 87px 20px 28px;
  height: 91px;
  justify-content: space-between;
  align-items:center;
  display:flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${palette.colorHeader};
 
`;

const Logohome = styled.a`
    width:178px;
    display:block;
`;

const LinkHeader = styled.a`
    color: #fff;
    font-size:1.5rem;
    font-weight:500;
`;




export default function Navhorizontale() {
return (
      <header>
       <nav>
          <UlHeader>
            <li>
            <Logohome href="#">
            <img src={iconlogo} alt="" /> 
            </Logohome>
            </li>
            <li>
              <LinkHeader
                to="/"
                end
                
              >
                Accueil
              </LinkHeader>
            </li>
            <li>
              <LinkHeader
                to="/"
                
              >
                Profil
              </LinkHeader>
            </li>
            <li>
              <LinkHeader
                to="/"
                
              >
                Réglage
              </LinkHeader>
            </li>
            <li>
              <LinkHeader
                to="/"
                
              >
                Communauté
              </LinkHeader>
            </li>
          </UlHeader>
        </nav>
      </header>
  )
}
