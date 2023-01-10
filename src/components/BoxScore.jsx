import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';
import { PieChart, Pie, Sector, Cell ,CartesianGrid} from 'recharts';
import styled from 'styled-components'

const dataUser = 0.12;
const LabelPourcent = dataUser * 100;

// const data = [
//   {
//     fill: "#8884d8",
//       todayScore: `${dataUser}`,
//     name:`${LabelPourcent}% de vos objectif`
//   },
// ]
const data = [
  
  {
    fill: "transparent",
    todayScore: 1,
 
  },
  {
    fill: "red",
    todayScore: 0.12,
    name:`${LabelPourcent}% de vos objectif`
  },
]

// const Legendtag = () => {
//   return(
//       <>coucou</>
    
//     )
// }



export default function BoxScore() {


  return (
    <BoxRadialBarChart>

    <TitleScore2>Score</TitleScore2>
    <LegendOut><Span1>{LabelPourcent}%</Span1><br />de vos objectif</LegendOut>
    <ResponsiveContainer width="100%" height="100%" >
    
        <RadialBarChart cx="120" cy="120" innerRadius="20" outerRadius="120" barSize={10} data={data} > 
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <RadialBar
           background={{ fill: data[0].fill }}
          // fill={{color:'red'}}
         
          track={{background: '#fff'}}
            minAngle={15}
            // label={{ position: 'insideStart', fill: 'red' }}
            clockWise
            dataKey="todayScore"
          />
        
        </RadialBarChart>
 
      </ResponsiveContainer>


      </BoxRadialBarChart>
  )
}

const BoxRadialBarChart = styled.div`
  width: 263px ;
  height: 263px;
  
  @media (max-width: 1150px) {
    width: 245px ;
    height: 245px;
  } 
  @media (max-width: 1010px) {
    width: 300px ;
    height: 300px;
  } 
`


const TitleScore2 = styled.h2`
  font-size:0.9rem;
  // margin-bottom: 40px;

  position: absolute;
  margin-top:24px;
  margin-left:30px;
  color:#20253A;
  `
  const LegendOut = styled.span`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: semi-bold;
  text-align: center;
  color: black;
  // background: #fff;
  border-radius: 50%;
  // padding: 2rem 1.5rem;
  `;

  const Span1=styled.span`
  font-size:1.4rem;
  font-weight: bold;
  `

