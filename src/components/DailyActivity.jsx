import React from 'react';
import { useParams } from "react-router";
import { getUserActivityById } from '../mock/ApiData.mock';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';


/** render Graphiq Daily activity (Recharts)
  * @param  {DailyActivity} function Component
  * @param  {userActivity} array
  * @return {JSX}
  */
export default function DailyActivity({userActivity}) {

  if (userActivity.length === 0) return null;

    const TooltipTag = ({active,payload}) => {

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

      return (
        <BoxBarChart>
        <TitleLegendActivity><h2>Activité quotidienne</h2><LegendBox><TagPoids></TagPoids>Poids(Kg)&emsp;<TagCalories></TagCalories>Calories brulées(Kcal)</LegendBox></TitleLegendActivity>
        <ResponsiveContainer width="100%" 
            height={200}>
          <BarChart
            // width={}
            height={145}
            barCategoryGap={1}
            barGap={6}
            maxBarSize={120}
            data={userActivity}
            // strokeDasharray={'rgba(196, 196, 196, 0.5)'}
            margin={{
              top: 30,
              right: 20,
              left: 30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" vertical={false}/>
            <XAxis dataKey="day" domain={['dataMin', 'dataMax']} stroke="rgb(155, 158, 172)" dy={1} tickMargin={12}/>
            <YAxis  dataKey="kilogram" orientation="right" domain={['dataMin - 1', 'dataMax']} stroke="rgb(155, 158, 172)" tickCount="3" axisLine={false} tickLine={false} tickMargin={10} />
            <YAxis dataKey="calories" orientation="right" domain={['dataMin / 3', 'dataMax / 3']}  />
            <Tooltip offset={23} 
               content={<TooltipTag/>}
               wrapperStyle={{ background: 'rgba(230, 0, 0, 1)', width: '39px', height:'63px', color:'#fff' , outline:"none"}} 
            />
            <Bar dataKey="kilogram" fill="rgba(40, 45, 48, 1)" barSize={6} radius={[50, 50, 0, 0]}/>
            <Bar dataKey="calories" fill="rgba(230, 0, 0, 1)" barSize={6} radius={[50, 50, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
        </BoxBarChart>
      )
  }
  
  const BoxBarChart = styled.div`
  width: 100% ;
  height: 320px;
`

  const TitleLegendActivity = styled.div`
  position:relative;
  display:flex;
  justify-content: space-between;
  width:90%;
  top:24px;
  margin-bottom:68px;
  margin-left:32px;
  font-size:0.9rem;
  font-weight:500;
  color: rgba(32, 37, 58, 1);
  h2{
    font-size:0.9rem;
    font-weight:500;
    margin:0;
  }
  `

  const LegendBox = styled.div`
    display: flex;
    font-size:0.9rem;
  `
  const TagPoids = styled.div`
  
    width:3px;
    heigth:3px;
    border-radius:50%;
    align-self: center;
    background-color: rgba(40, 45, 48, 1);
    margin-right:5px;
    padding:4px;
  `
  const TagCalories = styled.div`
    width:3px;
    heigth:3px;
    align-self: center;
    border-radius:50%;
    background-color: rgba(230, 0, 0, 1);
    margin-right:5px;
    padding:4px;
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
 
  