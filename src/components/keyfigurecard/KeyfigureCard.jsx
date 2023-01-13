import React from 'react'
import PropTypes from 'prop-types'; 
import caloriesIcon from './../../assets/calories-icon.png'
import fatIcon from './../../assets/fat-icon.png'
import proteinIcon from './../../assets/protein-icon.png'
import carbsIcon from './../../assets/carbs-icon.png'
import {Keyfigure,Img,Title3} from './keyfigurecard.style'

/** 
 * @param  {string} type
 * @param  {tring} value
 * @typeof  {Array} getImg 
 * @param  {img} let item of getImg
 * @return {JSX FC}
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

