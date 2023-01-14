import { palette } from '../../theme/styledvariable'
import styled from 'styled-components'


export const BoxLineChart = styled.article`
  background-color: ${palette.colorSecondary};
  color:#fff;
  width:263px;
  width:263px;

  @media (max-width: 1150px) {
    flex-wrap:wrap;
    width:245px;
    height:245px;
  }
  @media (max-width: 1010px) {
    flex-wrap:wrap;
    width:100%;
    height:263px;
  }
  `

export const LegendTitle = styled.div`
  color: rgba(255,255,255,0.7);
    padding:20px 10px 10px 34px;
    position:absolute;
`

export const BoxTooltipTag = styled.div`
    font-size:0.5rem;
    text-align : center;
    padding:8px 0 8px 0;
    
  `

export const SpanTooltip = styled.div`
    font-weight:bold;
  `