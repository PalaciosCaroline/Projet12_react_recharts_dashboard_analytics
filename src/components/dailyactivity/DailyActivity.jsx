import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BoxBarChart,TitleLegendActivity,LegendBox,TagPoids,TagCalories,BoxTooltipTag} from './dailyactivity.style'

/** render Graphiq BarChart Recharts of daily activity
  * @type  {JSX FC React} TooltipTag
  * @param {boolean} active
  * @param {Array} payload
  * @param  {Array} userActivity
  * @return {JSX FC React}
  */
export default function DailyActivity({userActivity}) {

  if (userActivity.length === 0) return null;

    const TooltipTag = ({active,payload}) => {

          if(active){
             return(
                   <BoxTooltipTag>
                       <span>{payload[0].value}Kg</span>
                       <br />
                       <br />
                       <span>{payload[1].value}Kcal</span>
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
              // maxBarSize={120}
              data={userActivity}
              margin={{
                top: 30,
                right: 20,
                left: 30,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="1 1" vertical={false}/>
              <XAxis dataKey="day" domain={['dataMin', 'dataMax']} stroke="rgb(155, 158, 172)" dy={1} tickMargin={12} tickLine={false}/>
              <YAxis yAxisId="kilogram"  dataKey="kilogram" orientation="right" domain={['dataMin - 1', 'dataMax']}  tickCount="3" axisLine={false} tickLine={false} tickMargin={10} allowDecimals={false} dx={15}/>
              <YAxis yAxisId="calories" dataKey="calories" orientation="right" domain={['dataMin - 50', 'dataMax + 20']} hide={true} axisLine={false}
            tickLine={false} type="number"
              />
              <Tooltip offset={23} 
                content={<TooltipTag/>}
                wrapperStyle={{ background: 'rgba(230, 0, 0, 1)', width: '39px', height:'63px', color:'#fff' , outline:"none"}} 
              />
              <Bar yAxisId="kilogram" dataKey="kilogram" fill="rgba(40, 45, 48, 1)" barSize={6} radius={[50, 50, 0, 0]}/>
              <Bar yAxisId="calories" dataKey="calories" fill="rgba(230, 0, 0, 1)" barSize={6} radius={[50, 50, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </BoxBarChart>
      )
  }

  DailyActivity.propTypes = {
    userActivity : PropTypes.array,
    formatterDataScore : PropTypes.func,
    TooltipTag : PropTypes.element,
    data : PropTypes.object,
    kilogram : PropTypes.number,
    calories : PropTypes.number,
    labelPourcent: PropTypes.number,
  }
  
 