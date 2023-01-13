import React from 'react'
import PropTypes from 'prop-types'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import styled from 'styled-components'
import { formatterDataScore } from '../utils/formatData'

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

const BoxRadialBarChart = styled.div`
  width: 263px;
  height: 263px;
  position: relative;
  background-color: rgba(251, 251, 251, 1);
  @media (max-width: 1150px) {
    width: 245px;
    height: 245px;
  }
  @media (max-width: 1010px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 450px) {
    width: 260px;
    height: 260px;
  }
`

const TitleScore2 = styled.h2`
  font-size: 0.9rem;
  position: absolute;
  margin-top: 24px;
  margin-left: 30px;
  color: #20253a;
`
const LegendOut = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: semi-bold;
  text-align: center;
  color: black;
  background: #fff;
  border-radius: 50%;
  padding: 50px 60px 50px 60px;
`

const Span1 = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`
