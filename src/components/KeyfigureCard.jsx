import React from 'react'
import PropTypes from 'prop-types'; 
import caloriesIcon from './../assets/calories-icon.png'
import fatIcon from './../assets/fat-icon.png'
import proteinIcon from './../assets/protein-icon.png'
import carbsIcon from './../assets/carbs-icon.png'
import styled from 'styled-components'

/** 
 * @param  {array} getImg
 * @param  {img} let item of getImg
 * @param  {string} type
 * @param  {tring} value
 * @return {JSX}
 */
export default function KeyfigureCard({type, value}) {
    
    const getImg = {
        Calories : caloriesIcon,
        Protéines : proteinIcon,
        Glucides : carbsIcon,
        Lipides: fatIcon
    }   

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

KeyfigureCard.propTypes = {
  getImg : PropTypes.array,
  type: PropTypes.string,
  value: PropTypes.string,
}

const Keyfigure = styled.article`
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
const Img = styled.img`
    width:60px;
    height:60px;
    margin-right:32px;
`

const Title3 = styled.h3`
   margin:0;
   
`