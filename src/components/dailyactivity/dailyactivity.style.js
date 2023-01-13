import styled from 'styled-components'

export const BoxBarChart = styled.div`
  width: 100% ;
  height: 320px;
  color: rgba(0,0,0,0.2);
  background-color:rgba(251, 251, 251, 1);
`

export const TitleLegendActivity = styled.div`
  position:relative;
  display:flex;
  justify-content: space-between;
  width:90%;
  top:24px;
  margin-bottom:68px;
  margin-left:32px;
  font-size:0.9rem;
  font-weight:500;
  color: rgba(32, 37, 58, 1);
  h2{
    font-size:0.9rem;
    font-weight:500;
    margin:0;
    @media (max-width: 500px) {
      font-size:0.7rem;
    } 
  }
  @media (max-width: 450px) {
    font-size:0.7rem;
    margin-left:10px;
  } 
  `

export const LegendBox = styled.div`
    display: flex;
    font-size:0.9rem;
    @media (max-width: 500px) {
      font-size:0.6rem;
    } 
  `
export const TagPoids = styled.div`
    width:3px;
    heigth:3px;
    border-radius:50%;
    align-self: center;
    background-color: rgba(40, 45, 48, 1);
    margin-right:5px;
    padding:4px;
  `
export const TagCalories = styled.div`
    width:3px;
    heigth:3px;
    align-self: center;
    border-radius:50%;
    background-color: rgba(230, 0, 0, 1);
    margin-right:5px;
    padding:4px;
  `

export const BoxTooltipTag = styled.div`
    font-size:0.5rem;
    text-align : center;
    padding:8px 0 8px 0;
    
  `

export const SpanTooltip1 = styled.div`
    height:50%;
  `
export const SpanTooltip2 = styled.div`
    height:50%;
  `
 
  