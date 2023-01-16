import React from 'react'
import PropTypes from 'prop-types'; 
import {Keyfigure,Img,Title3} from './keyfigurecard.style'

/** 
 * @param  {string} type
 * @param  {any} value
 * @typeof  {Array} getImg 
 * @param  {img} let item of getImg
 * @return {JSX FC}
 */
export default function KeyfigureCard({img, type, value}) {

  return (
    <Keyfigure>
        <Img src={img} alt={type} ></Img>
        <div>
            <Title3 >{value}</Title3>
            <span>{type}</span>
        </div>
    </Keyfigure>
  )
}

KeyfigureCard.propTypes = {
  img : PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.any,
}

