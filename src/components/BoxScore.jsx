import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'

const dataUser = 0.12;
const LabelPourcent = dataUser * 100;

const data = [
  {
    fill: "#8884d8",
      todayScore: `${dataUser}`,
     name:`${LabelPourcent}% de vos objectif`
  },
]

export default function BoxScore() {

  return (
    <>
    <TitleScore2>Score</TitleScore2>
    <LegendOut><Span1>{LabelPourcent}%</Span1><Span2>de vos objectif</Span2></LegendOut>
    <ResponsiveContainer width="100%" height="100%">
   
        <RadialBarChart cx="50%" cy="50%" innerRadius="80" outerRadius="100" barSize={60} data={data} > 
          <RadialBar
          // fill={{color:'red'}}
          // track={{background: '#1cbd00'}}
          
            minAngle={15}
            // label={{ position: 'insideStart', fill: 'red' }}
            background
            clockWise
            dataKey="todayScore"
          />
          {/* <Legend iconSize={0} layout="vertical" verticalAlign="middle" wrapperStyle="" /> */}
        </RadialBarChart>
      </ResponsiveContainer>
      

      </>
  )
}


const TitleScore2 = styled.h2`
  font-size:0.9rem;
  margin-bottom: 40px;

  position: absolute;
  margin-top:24px;
  margin-left:30px;
  color:#20253A;
  `

  const LegendOut = styled.div`
  position:absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);

    color: red;
  `
  const Span1 = styled.span`
  
    color: red;
  `
  const Span2 = styled.span`
    color: red;
  `