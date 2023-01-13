import { palette } from '../../theme/styledvariable'
import styled from 'styled-components'

export const BoxRadarChart = styled.article`
  width: 263px;
  height: 263px;
  box-sizing: border-box;
  background-color: ${palette.colorPrimary};
  color: #fff;
  // width:31%
  padding: 8px 8px 8px 8px;
  @media (max-width: 1150px) {
    height: 245px;
  }
  @media (max-width: 1010px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 1150px) {
    width: 245px;
    height: 245px;
  }
  @media (max-width: 1010px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 450px) {
    width: 260px;
    height: 260px;
  }
`
