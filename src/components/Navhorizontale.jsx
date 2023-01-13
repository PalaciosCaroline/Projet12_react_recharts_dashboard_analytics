import React from 'react'
import PropTypes from 'prop-types'; 
import iconlogo from './../assets/logo_sportseeSVG.svg'
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'

const Header = styled.header`
  position: relative;
  z-index:2;
  min-height: 91px;
  width:100%;
  
`
 
const UlHeader = styled.ul`
  font-size: 1.4rem;
  // min-height: 40px;
  line-height : 91px;
  justify-content: space-between;
  // align-items: center;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${palette.colorHeader};
  padding: 0 8% 0 2%;
  @media (max-width: 450px) {
    padding: 0;
  } 
  a{
    @media (max-width: 1000px) {
      font-size: 1rem;
      margin: 0 10px 0 10px;
    } 
    @media (max-width: 600px) {
      font-size: 0.8rem;
    } 
    
  }
  
`

const Logohome = styled.a`
  width: 178px;
  display: block;
  height:100%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: 60px;
  } 
  img{
    @media (max-width: 600px) {
      width:80px;
    } 
  }
`

const LinkHeader = styled.a`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
`

/** render Header_page Nav
  * @param {img} iconlogo
  * @return {JSX FC React} 
  */

export default function Navhorizontale() {
  return (
    <Header>
      <nav>
        <UlHeader>
          <li>
            <Logohome href="/">
              <img src={iconlogo} alt="" />
            </Logohome>
          </li>
          <li>
            <LinkHeader href="/" end="true">
              Accueil
            </LinkHeader>
          </li>
          <li>
            <LinkHeader href="/">Profil</LinkHeader>
          </li>
          <li>
            <LinkHeader href="/">Réglage</LinkHeader>
          </li>
          <li>
            <LinkHeader href="/">Communauté</LinkHeader>
          </li>
        </UlHeader>
      </nav>
    </Header>
  )
}

Navhorizontale.propTypes = {
  img: PropTypes.any
}
