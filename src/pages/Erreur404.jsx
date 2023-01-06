// import { NavLink } from 'react-router-dom'
import styled from "styled-components";

export default function Erreur404() {
  return (
    <Erreurmain className="erreur404">
      <TitleH1 className="Erreur404_title">404</TitleH1>
      <TitleH2 className="Erreur404_text">
        Oups ! La page que <Erreursmall className="erreur_small" />
        vous demandez n'existe pas.
      </TitleH2>
      <Erreur404link to="/" className="erreur404_link">
        Retourner sur la page d'accueil
      </Erreur404link>
    </Erreurmain>
  )
}

const Erreurmain = styled.main`
  margin:10%;
  text-align: center;
`


const Erreursmall = styled.br`
  display:none;
  @media (max-width: 900px) {
    display: flex;
  }
}
`

const TitleH1 =  styled.h1 `
    margin: 3rem 0 4rem 0;
    font-size: 18rem;
    font-weight: 700;
    @media (max-width: 900px) {
      margin: 8rem 0 1rem 0;
      font-size: 8rem;
    }
    @media (max-width: 550px) {
      margin: 6rem 0 1rem 0;
      font-size: 6rem;
    }
    `
  
  const TitleH2 = styled.h2`
  font-size: 2.2rem;
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 550px) {
    font-size: 1.1rem;
  }
`

  const Erreur404link = styled.a `
    display: inline-block;
    margin: 7rem 0;
    font-size: 1.2rem;
    text-decoration: underline;
    @media (max-width: 900px) {
      margin: 4rem 0;
      font-size: 1.2rem;
    }
    @media (max-width: 550px) {
      font-size: 0.9rem;
    }
  `