import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  

  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={200}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis  dataKey="sessionLength" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} content={<div style={{color:'rgba(255,255,255,0.5)'}}>Durée moyenne des sessions</div>}/>
      <Line type="monotone" 
            dataKey="sessionLength" stroke="rgba(255,255,255,0.5" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
    
    </LineChart>
  </ResponsiveContainer>
  )
}
