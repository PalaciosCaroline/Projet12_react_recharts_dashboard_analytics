import { palette } from '../../theme/styledvariable'
import styled from 'styled-components'

export const HeaderVertical = styled.header`
  position: relative;
  top: 0;
  height: auto;
  z-index: 1;
  min-width: 117px;
  background-color: ${palette.colorHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 600px) {
    min-width: 60px;
  } 
`

export const LiHeaderVertical = styled.li`
  margin-top: 20px;
`
export const Nav = styled.nav`
  // position: fixed;
  position: relative;
  // justify-self:center;
  top: 25%;
  @media (max-width: 1100px) {
    top: 22%;
  }
  @media (max-width: 600px) {
    top:80px;
  }
  // margin: auto;
  // padding-bottom:40px;
  img{
    @media (max-width: 600px) {
      
      width: 40px;
      height:40px
    } 
  }
`

export const Footer = styled.footer`
  font-size: 0.8rem;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  justify-self: start;
  bottom: 59px;
  position: absolute;
  color: #fff;
  @media (max-width: 1100px) {
    bottom: 20px;
  }
`