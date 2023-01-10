import React from 'react';
import { useParams } from "react-router";
import { getUserActivityById } from '../mock/ApiData.mock';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';


// export default function DailyActivity({data}) {
//   return (
//     <BarChart></BarChart>
//   )
// }



const USER_ACTIVITY = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
]

function TooltipTag({active,payload}) {
  if(active){
    return(
          <BoxTooltipTag>
              <SpanTooltip1>{payload[0].value}Kg</SpanTooltip1>
              <br />
              <br />
              <SpanTooltip2>{payload[1].value}Kcal</SpanTooltip2>
          </BoxTooltipTag>
      )}
      else{
        return;
      }
  }

export default function DailyActivity() {



      return (
        <>
        <TitleActivity2>Activité quotidienne</TitleActivity2>
        <ResponsiveContainer width="100%" height="50%">
          <BarChart
            // width={}
            height={145}
            barCategoryGap="100%"
            barGap={8}
            maxBarSize={120}
            data={USER_ACTIVITY}
            // strokeDasharray={'rgba(196, 196, 196, 0.5)'}
            margin={{
              top: 30,
              right: 20,
              left: 30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" vertical={false}/>
            <XAxis dataKey="{Date.prototype.getDate(day)}" stroke="rgb(155, 158, 172)"/>
            <YAxis dataKey="kilogram" orientation="right" domain={['dataMin - 1', 'dataMax + 1']} stroke="rgb(155, 158, 172)" tickCount="6" axisLine={false} tickLine={false} tickMargin={10} type="number" />
            <YAxis dataKey="calories" orientation="right" domain={['dataMin', 'dataMax']}  type="number"/>
            <Tooltip offset={23} 
               content={<TooltipTag/>}
               wrapperStyle={{ background: 'rgba(230, 0, 0, 1)', width: '39px', height:'63px', color:'#fff' , outline:"none"}} 
            />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="kilogram" fill="rgba(40, 45, 48, 1)" barSize={6} radius={[50, 50, 0, 0]}/>
            <Bar dataKey="calories" fill="rgba(230, 0, 0, 1)" barSize={6} radius={[50, 50, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
        </>
      )
  }
  
  

  const TitleActivity2 = styled.h2`
  padding-top=24px;
  margin-left:32px;
  font-size:0.9rem;
  font-weight:500;
  color: rgba(32, 37, 58, 1);
  margin-bottom:100px;

  `

  const BoxTooltipTag = styled.div`
    font-size:0.5rem;
    text-align : center;
    padding:8px 0 8px 0;
    
  `

  const SpanTooltip1 = styled.div`
    height:50%;
  `
  const SpanTooltip2 = styled.div`
    height:50%;
  `
 
  