import React from 'react'
import PropTypes from 'prop-types'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { formatDataScore } from '../../utils/formatData'
import {BoxRadialBarChart, LegendOut} from './boxscore.style'

/** render Graphiq RadialBarChart Recharts of Score
 * @param  {array} dataUser
 * @type  {function} formatterDataScore
 * @return {JSX FC}
 */
export default function BoxScore({ dataUser }) {
  let { data, labelPourcent } = formatDataScore(dataUser)

  return (
    <BoxRadialBarChart>
      <h2>Score</h2>
      <LegendOut>
        <span>{labelPourcent}%</span>
        <br />
        de vos objectif
      </LegendOut>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20"
          outerRadius="160"
          barSize={13}
          data={data}
        >
          <CartesianGrid
            strokeDasharray="1 1"
            vertical={false}
            horizontal={false}
          />
          <RadialBar
            background={{ fill: data[0].fill }}
            track={{ background: '#fff' }}
            minAngle={14}
            clockWise
            dataKey="todayScore"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </BoxRadialBarChart>
  )
}

BoxScore.propTypes = {
  dataUser: PropTypes.object,
  formatterDataScore: PropTypes.func,
  data: PropTypes.object,
  labelPourcent: PropTypes.number,
}

