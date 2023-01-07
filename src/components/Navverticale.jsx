import React from 'react'
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'
import { NavLink } from 'react-router-dom'
import iconnatation from './../assets/icon_natation.png'
import iconalter from './../assets/icon_alter.png'
import iconzen from './../assets/icon_zen.png'
import iconvelo from './../assets/icon_velo.png'



const HeaderVertical = styled.header`
position:fixed;
top:0;
height:100vh;
z-index:1;
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
    margin-:auto;
    bottom:59px;
    position: absolute;
    color: #fff;
`
const LiHeaderVertical = styled.li`
    margin-top:20px;

`
const Nav = styled.nav`
    margin: auto;
    // padding-bottom:40px;
`

export default function Navverticale() {
    return(
    <HeaderVertical>
   
      <Nav>
        <ul>
          <LiHeaderVertical>
                <NavLink to="/">
                <img src={iconzen} alt="méditation" />
                </NavLink>
            </LiHeaderVertical>
            <LiHeaderVertical>
                <NavLink href="/">
                <img src={iconnatation} alt="natation" />
                </NavLink>
            </LiHeaderVertical>
            <LiHeaderVertical>
                <NavLink href="/">
                <img src={iconvelo} alt="velo" />
                </NavLink>
            </LiHeaderVertical>
            <LiHeaderVertical>
                <NavLink href="/">
                <img src={iconalter} alt="musculation" />
                </NavLink>
            </LiHeaderVertical>
        </ul>
      </Nav>
      <Footer><p>Copiryght, SportSee 2020</p></Footer>
    </HeaderVertical>
        )
}