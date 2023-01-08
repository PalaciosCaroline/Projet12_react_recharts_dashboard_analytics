import { palette } from '../../theme/styledvariable'
import styled from 'styled-components'

export const HeaderVertical = styled.header`
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 1;
  width: 117px;
  background-color: ${palette.colorHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const LiHeaderVertical = styled.li`
  margin-top: 20px;
`
export const Nav = styled.nav`
  position: fixed;
  top: 28%;
  @media (max-width: 1100px) {
    top: 22%;
  }
  // margin: auto;
  // padding-bottom:40px;
`