import styled from "styled-components";

export const Erreurmain = styled.main`
  margin:10%;
  text-align: center;
  color: #000;
  margin: 60px auto;
  h1{
        // margin: 3rem 0 4rem 0;
        font-size: 6rem;
        font-weight: 700;
        @media (max-width: 900px) {
        margin: 8rem 0 1rem 0;
        }
        @media (max-width: 550px) {
        // margin: 6rem 0 1rem 0;
        font-size: 3rem;
        }
    }
    h2{
        font-size: 2.2rem;
        @media (max-width: 900px) {
        font-size: 1.5rem;
        }
        @media (max-width: 550px) {
        font-size: 1.1rem;
        }
    }
    br{
        display:none;
        @media (max-width: 900px) {
          display: flex;
        }
    }
    a{
        display: inline-block;
        color:#000;
        margin-top:30px;
        font-size: 1.2rem;
        text-decoration: underline;
        @media (max-width: 900px) {
          font-size: 1.2rem;
        }
        @media (max-width: 550px) {
          font-size: 0.9rem;
        }
    }
`
