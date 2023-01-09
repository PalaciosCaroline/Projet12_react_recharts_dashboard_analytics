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

const Legendtag = () => {
  return(
      <>coucou</>
    
    )
}



export default function BoxScore() {


  return (
    <>

    <TitleScore2>Score</TitleScore2>
   {/*  <LegendOut><Span1>{LabelPourcent}%</Span1><Span2>de vos objectif</Span2></LegendOut> */}
    <ResponsiveContainer width="100%" height="100%" >
    
        <RadialBarChart cx="120" cy="120" innerRadius="25" outerRadius="140" barSize={12} data={data} > 
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
         {/* <Legend iconSize={0} layout="vertical" verticalAlign="middle" wrapperStyle={{ bottom:'68px',left:'46px',backgroundColor:'blue', borderRadius:'50%'}} 
       width={148}
        height={148}></Legend>   */}
        </RadialBarChart>
 
      </ResponsiveContainer>


      </>
  )
}


const TitleScore2 = styled.h2`
  font-size:0.9rem;
  // margin-bottom: 40px;

  position: absolute;
  margin-top:24px;
  margin-left:30px;
  color:#20253A;
  `

  // const LegendOut = styled.div`
  // position:absolute;
  // // left: 50%;
  // // top: 50%;
  // // transform: translate(-50%, -50%);

  //   color: red;
  // `
  // const Span1 = styled.span`
  
  //   color: red;
  // `
  // const Span2 = styled.span`
  //   color: red;
  // `