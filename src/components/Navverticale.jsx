import React from 'react'
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'
// import { NavLink } from 'react-router-dom'
import iconnatation from './../assets/icon_natation.png'
import iconalter from './../assets/icon_alter.png'
import iconzen from './../assets/icon_zen.png'
import iconvelo from './../assets/icon_velo.png'



const HeaderVertical = styled.header`
    width: 117px;
    background-color: ${palette.colorHeader};
    display:flex;
    flex-direction: column;
    align-items:center;  
`

    
const Footer = styled.footer`
    font-size:0.8rem;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin-left:auto;
    padding-top:59px;
    padding-left:42px;
    color: #fff;
`
const LiHeaderVertical = styled.li`
    margin-top:20px;

`
const Nav = styled.nav`
    margin: auto;
    padding-bottom:40px;
`

export default function Navverticale() {
    return(
    <HeaderVertical>
   
      <Nav>
        <ul>
          <LiHeaderVertical>
                <a href="/">
                <img src={iconzen} alt="méditation" />
                </a>
            </LiHeaderVertical>
            <LiHeaderVertical>
                <a href="/">
                <img src={iconnatation} alt="natation" />
                </a>
            </LiHeaderVertical>
            <LiHeaderVertical>
                <a href="/">
                <img src={iconvelo} alt="velo" />
                </a>
            </LiHeaderVertical>
            <LiHeaderVertical>
                <a href="/">
                <img src={iconalter} alt="musculation" />
                </a>
            </LiHeaderVertical>
            
        </ul>
      </Nav>
      <Footer><p>Copiryght, SportSee 2020</p></Footer>
    </HeaderVertical>
        )
}