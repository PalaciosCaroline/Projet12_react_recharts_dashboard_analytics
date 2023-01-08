import React from 'react'
import caloriesIcon from './../assets/calories-icon.png'
import fatIcon from './../assets/fat-icon.png'
import proteinIcon from './../assets/protein-icon.png'
import carbsIcon from './../assets/carbs-icon.png'
import styled from 'styled-components'

export default function KeyfigureCard({type, value}) {
    
    const getImg = {
        Calories : caloriesIcon,
        Protéines : proteinIcon,
        Glucides : carbsIcon,
        Lipides: fatIcon
    }  

    // const backgroundImg = {
    //     Calories : 'rgba(255, 0, 0, 1)',
    //         Protéines : 'rgba(74, 184, 255, 0.1)',
    //         Glucides : '#F9CE23',
    //         Lipides: 'rgba(253, 81, 129, 0.1)'
    // }
    

  return (
    <Keyfigure>
        <Img src={getImg[type]} alt={type} ></Img>
        <div>
            <Title3 >{value} {type === 'Calories' ? 'Kcal' : 'g'}</Title3>
            <span>{type}</span>
        </div>
    </Keyfigure>
  )
}

const Keyfigure = styled.article`
box-sizing: border-box;
  width:100%;
  height:124px;
  background: rgba(251, 251, 251, 1);
  display:flex;
  align-items: center;
  padding:32px;
  @media (max-width: 1100px) {
    width:23%;
    min-width:250px;
  }
   @media (max-width: 950px) {
    width:45%;
   }
`
const Img = styled.img`
    width:60px;
    height:60px;
    margin-right:32px;
`

const Title3 = styled.h3`
   margin:0;
`