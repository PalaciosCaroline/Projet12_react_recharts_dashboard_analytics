import styled from 'styled-components'

export const Keyfigure = styled.article`
    box-sizing: border-box;
  background: rgba(251, 251, 251, 1);
  display:flex;
  align-items: center;
  padding:32px;
  @media (max-width: 1350px) {
    width:23%;
    padding:12px 8px 12px 12px;
  }
  span{
    color:rgba(116, 121, 140, 1);
  }
  
`
export const Img = styled.img`
    width:60px;
    height:60px;
    margin-right:32px;
`

export const Title3 = styled.h3`
   margin:0;
   
`