
import styled from 'styled-components'
import { palette } from '../../theme/styledvariable'

export const Wrapped = styled.div`
display: flex;
box-sizing: border-box;
flex-direction: column;
padding: 72px 90px 90px 107px;
margin: auto;
heigth: 100%;
max-width:1700px;
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
`

export const BoxTitle = styled.header`
margin-bottom: 50px;
h1 {
  font-size: 3rem;
  margin: 0 0 25px 0;
}
span {
  color: ${palette.colorName};
}
`

export const BoxResult = styled.section`
display: flex;
justify-content: space-between;
// width:100%;
heigth: 630px;
gap: 30px;
@media (max-width: 1300px) {
  flex-direction: column;
  height: auto;
  gap: 20px;
}
`
export const Column1 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 30px;

@media (max-width: 1250px) {
  width: 100%;
  gap: 20px;
}
`

export const SessionWrapper = styled.section`
color: rgba(0, 0, 0, 0.2);
width: 100%;
display: flex;
heigth: 263px;
gap: 30px;
justify-content: space-between;
@media (max-width: 1250px) {
  width: 100%;
  flex-wrap: wrap;
  height: auto;
}
@media (max-width: 1010px) {
  justify-content: space-around;
}
`

export const Keyfigures = styled.section`
display: flex;
flex-wrap: wrap;
align-content: space-between;
justify-content: space-between;
@media (max-width: 1300px) {
  width: 100%;
}
article {
  min-width: 160px;
  width: 100%;
  heigth: 124px;
  max-width:300px;
  @media (max-width: 1300px) {
    width: 43%;
    gap: 30px;
    margin-top: 30px;
  }
  @media (max-width: 680px) {
    width: 90%;
    gap: 20px;
    margin: 30px auto 20px;
  }
}
`
