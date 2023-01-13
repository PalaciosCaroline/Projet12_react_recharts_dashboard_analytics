import React from 'react'
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'

/** render Graphiq RadarChart Recharts of performance 
  * @param  {Array} userPerformance
  * @return {JSX FC React}
  */
export default function BoxRadar({userPerformance}) {

  if (userPerformance.length <= 0) return null;

  return (
    <BoxRadarChart>
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance} >
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis dataKey="kind"  tick={{ fontSize: 8 }} stroke='white' tickLine={false} axisLine={false}/>
          <Radar dataKey="value" stroke='#FF0101'  fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </BoxRadarChart>
  )
}

BoxRadar.propTypes = {
  userPerformance : PropTypes.array,
  king: PropTypes.string,
  value: PropTypes.number
}


const BoxRadarChart = styled.article`
  width: 263px ;
  height: 263px;
  box-sizing:border-box;
  background-color: ${palette.colorPrimary};
  color:#fff;
  // width:31%
  padding: 8px 8px 8px 8px;
  @media (max-width: 1150px) {
    height:245px;
  } 
  @media (max-width: 1010px) {
    width: 300px ;
    height: 300px;
  } 
  
  @media (max-width: 1150px) {
    width: 245px ;
    height: 245px;
  } 
  @media (max-width: 1010px) {
    width: 300px ;
    height: 300px;
  } 
  @media (max-width: 450px) {
    width: 260px ;
    height: 260px;
  } 
`