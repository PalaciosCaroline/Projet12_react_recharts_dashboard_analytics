import React from 'react'
import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import {BoxRadarChart} from './boxradar.style'

/** render Graphiq RadarChart Recharts of performance
 * @param  {Array} userPerformance
 * @return {JSX FC React}
 */
export default function BoxRadar({ userPerformance }) {
  if (userPerformance.length <= 0) return null

  return (
    <BoxRadarChart>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fontSize: 8 }}
            stroke="white"
            tickLine={false}
            axisLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </BoxRadarChart>
  )
}

BoxRadar.propTypes = {
  userPerformance: PropTypes.array,
  king: PropTypes.string,
  value: PropTypes.number,
}

