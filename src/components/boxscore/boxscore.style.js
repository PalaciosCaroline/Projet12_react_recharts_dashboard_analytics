import styled from 'styled-components'

export const BoxRadialBarChart = styled.div`
  width: 263px;
  height: 263px;
  position: relative;
  background-color: rgba(251, 251, 251, 1);
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

export const TitleScore2 = styled.h2`
  font-size: 0.9rem;
  position: absolute;
  margin-top: 24px;
  margin-left: 30px;
  color: #20253a;
`
export const LegendOut = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: semi-bold;
  text-align: center;
  color: black;
  background: #fff;
  border-radius: 50%;
  padding: 50px 60px 50px 60px;
`

export const Span1 = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`
