import { NavLink } from 'react-router-dom'
import {Erreurmain} from './erreur404.style.js'


export default function Erreur404() {
  return (
    <Erreurmain className="erreur404">
      <h1 className="Erreur404_title">404</h1>
      <h2 className="Erreur404_text">
        Oups ! La page que <br/>
        vous demandez n'existe pas.
      </h2>
      <NavLink to="/">
        Retourner sur la page d'accueil
      </NavLink>
    </Erreurmain>
  )
}

