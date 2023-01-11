import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'



export default function AverageSessions() {

     const data = [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
  
  // const LegendTitle = () => {
  //   return(
  //       <>Durée moyenne des sessions</>
  //     )
  // }


  return (
    <BoxLineChart>
      <LegendTitle>Durée moyenne des<br/> sessions</LegendTitle>
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={200}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
     
      <XAxis dataKey="day" tickLine={true} padding={{right:10, left:10}} width='110%'/>
      <YAxis  dataKey="sessionLength" hide={true} />
      <Tooltip />
      {/* <Legend stroke={{color:'rgba(255,255,255,0.5'}} verticalalign="top" height={36} content={<LegendTitle/>}/> */}
      <Line type="monotone" 
            dataKey="sessionLength" stroke="rgba(255,255,255,0.5" strokeWidth={2} dot={false} activeDot={{ r: 3,stroke: "#fff", fill:"#fff"}}/>
    
    </LineChart>
  </ResponsiveContainer>
  </BoxLineChart>
  )
}

const BoxLineChart = styled.article`
background-color: ${palette.colorSecondary};
  color:#fff;
  width:263px;
  width:263px;

  @media (max-width: 1150px) {
    flex-wrap:wrap;
    width:245px;
    height:245px;
  }
  @media (max-width: 1010px) {
    flex-wrap:wrap;
    width:100%;
    height:263px;
  }
  `

const LegendTitle = styled.div`
  color: rgba(255,255,255,0.5);
    padding:20px 10px 10px 34px;
    position:absolute;
`
