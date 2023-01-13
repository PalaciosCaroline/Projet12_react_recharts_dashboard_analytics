import styled from "styled-components";
import {palette} from "../../theme/styledvariable"

export const MainAccueil = styled.main`
  text-align:center;
  padding:68px 9% 88px 224px;
  margin : 0 auto;
  @media (max-width: 1400px) {
    padding: 40px 50px 50px 63px;
  }
  @media (max-width: 1250px) {
    padding: 40px 70px 50px 107px;
  }
  @media (max-width: 1150px) {
    padding: 40px 40px 50px 43px;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    padding: 72px 20px 90px 20px;
  }
  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
  h1, h2{
    font-size:3rem;
    color: black;
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
  }
  a{
    border:none;
    display:inline-block;
    text-align:center;
    width:150px;
    padding: 10px 20px;
    margin: 50px;
    background-color: ${palette.colorSecondary};
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
    @media (max-width: 550px) {
      font-size: 1.2rem;
    }
  }
`
