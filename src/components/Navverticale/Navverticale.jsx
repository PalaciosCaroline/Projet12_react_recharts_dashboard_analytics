import React from 'react'
import PropTypes from 'prop-types'; 
import {HeaderVertical, Footer, LiHeaderVertical, Nav} from './navverticale.styles'
import { NavLink } from 'react-router-dom'
import iconnatation from './../../assets/icon_natation.png'
import iconalter from './../../assets/icon_alter.png'
import iconzen from './../../assets/icon_zen.png'
import iconvelo from './../../assets/icon_velo.png'

/** render Header_Main Nav
  * @param  {JSX FC} HeaderVertical, Footer, LiHeaderVertical, Nav
  * @param { img} iconnatation,iconalter, iconalter,  iconvelo
  * @return {JSX}
  */
export default function Navverticale() {
  return (
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
      <Footer>
        <p>Copiryght, SportSee 2020</p>
      </Footer>
    </HeaderVertical>
  )
}

Navverticale.propTypes = {
  img: PropTypes.any
}
