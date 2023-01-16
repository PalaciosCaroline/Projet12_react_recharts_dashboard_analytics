import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {LegendTitle,BoxTooltipTag,SpanTooltip,BoxLineChart} from './averagesessions.style'

/** render Graphiq LineChart Recharts of average sessions 
  * @param  {AverageSessions} function Component
  * @param  {userAverageSessions} array
  * @return {JSX FC}
  */
export default function AverageSessions({userAverageSessions}) {

  if (userAverageSessions.length == null) return null;

  const TooltipTagAverageSessions = ({active,payload}) => {
    if(active){
      return(
            <BoxTooltipTag>
                <SpanTooltip>{payload[0].value} min</SpanTooltip>
            </BoxTooltipTag>
        )}
        else{
          return;
        }
  }
  
  return (
    <article className='boxline'>
      <LegendTitle>Durée moyenne des<br/> sessions</LegendTitle>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
        onMouseMove={(e) => { 
          if (e.isTooltipActive === true) {
            let boxContainer = document.querySelector('.boxline')
            let windowWidth = boxContainer.clientWidth
            let mouseXpercentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            )
            boxContainer.style.background = `linear-gradient(90deg, hsla(0, 100%, 50%, 1)
            ${mouseXpercentage}%, hsla(0, 80%, 50%, 1) ${mouseXpercentage}%, hsla(0, 80%, 50%, 1) 100%)`
          } else {
            let boxContainer = document.querySelector('.boxline')
            boxContainer.style.background = 'hsla(0, 100%, 50%, 1)'
        }}}
          onMouseLeave={() => {
            let boxContainer = document.querySelector('.boxline')
            boxContainer.style.background = 'hsla(0, 100%, 50%, 1)'
          }}
          width={200}
          height={200}
          data={userAverageSessions}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }} 
        >
          <XAxis dataKey="day" padding={{right:10, left:10}} stroke="rgba(255,255,255,0.6" axisLine={false}
                dy={-10}
                tickLine={false}/>
          <YAxis  dataKey="sessionLength" hide={true} domain={['dataMin - 5', 'dataMax + 10']}/>
          <Tooltip  
                  content={<TooltipTagAverageSessions/>}
                  wrapperStyle={{ background: '#fff', width: '39px', height:'25px', color:'#000' , outline:"none"}} 
                  cursor={{stroke: "transparent"}}
                  />
          <Line type="monotone" 
                dataKey="sessionLength" stroke="rgba(255,255,255,0.6" strokeWidth={2} dot={false} activeDot={{ r: 3,stroke: "#fff", fill:"#fff"}}/>
        </LineChart>
      </ResponsiveContainer>
    </article>
  )
}

AverageSessions.propTypes = {
  userAverageSessions : PropTypes.array,
  TooltipTagAverageSessions : PropTypes.element,
  active: PropTypes.bool,
  payload : PropTypes.array,
  day : PropTypes.number,
  sessionLength : PropTypes.number,
}

