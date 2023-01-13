import React from 'react'
import PropTypes from 'prop-types'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { formatterDataScore } from '../../utils/formatData'
import {BoxRadialBarChart,TitleScore2,LegendOut,Span1} from './boxscore.style'

/** render Graphiq RadialBarChart Recharts of Score
 * @param  {array} dataUser
 * @type  {function} formatterDataScore
 * @return {JSX FC}
 */
export default function BoxScore({ dataUser }) {
  let { data, labelPourcent } = formatterDataScore(dataUser)

  return (
    <BoxRadialBarChart>
      <TitleScore2>Score</TitleScore2>
      <LegendOut>
        <Span1>{labelPourcent}%</Span1>
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

