import React from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';





export default function BoxRadar() {

 



      const data = [
            {
                value: 80,
                kind: 'cardio'
            },
            {
                value: 120,
                kind:  'energy'
            },
            {
                value: 140,
                kind: 'endurance'
            },
            {
                value: 50,
                kind:'strength'
            },
            {
                value: 200,
                kind: 'speed'
            },
            {
                value: 90,
                kind: 'intensity'
            }
        ];
   


  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} >
          <PolarGrid gridType="polygon" />
         
          <PolarAngleAxis dataKey="kind"  tick={{ fontSize: 10 }} stroke='white' tickLine={false} axisLine={false}/>
          
          <Radar dataKey="value" stroke='#FF0101'  fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    
    </>
  )
}

