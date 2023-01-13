import React from 'react'
import { NavLink } from 'react-router-dom'
import {MainAccueil} from './choiceuser.style'

export default function Choiceuser() {
  return (
    <MainAccueil>
      <h1>Accueil<br></br></h1>
      <h2>Choice User</h2>
      <nav>
          <NavLink to="/user/12">USER 12</NavLink>
          <NavLink to="/user/18">USER 18</NavLink>
      </nav>
    </MainAccueil>
  )
}

