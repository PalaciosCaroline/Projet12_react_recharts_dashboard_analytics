import React, {useState, useEffect} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getData} from '../hooks/usefetch';
import { formatterDataAverageSessions } from '../hooks/formatData';
import { useParams } from "react-router";
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'



export default function AverageSessions() {

  const [userAverageSessions,setUserAverageSessions] = useState([])
  let {id} = useParams();

  useEffect(() => {
    const averageSessions = async () => {
      const request = await getData(id, 'averageSessions');
      if (!request) return alert("data error");
      const data = formatterDataAverageSessions(request.data.sessions)
      setUserAverageSessions(data);
    };
    averageSessions();
  }, [id]);

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
    <BoxLineChart>
      <LegendTitle>Durée moyenne des<br/> sessions</LegendTitle>
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
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
      <YAxis  dataKey="sessionLength" hide={true} domain={['dataMin - 5', 'dataMax']}/>
      <Tooltip offset={23} 
               content={<TooltipTagAverageSessions/>}
               wrapperStyle={{ background: '#fff', width: '39px', height:'25px', color:'#000' , outline:"none"}} />
      {/* <Legend stroke={{color:'rgba(255,255,255,0.5'}} verticalalign="top" height={36} content={<LegendTitle/>}/> */}
      <Line type="monotone" 
            dataKey="sessionLength" stroke="rgba(255,255,255,0.6" strokeWidth={2} dot={false} activeDot={{ r: 3,stroke: "#fff", fill:"#fff"}}/>
    
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
  color: rgba(255,255,255,0.7);
    padding:20px 10px 10px 34px;
    position:absolute;
`

const BoxTooltipTag = styled.div`
    font-size:0.5rem;
    text-align : center;
    padding:8px 0 8px 0;
    
  `

  const SpanTooltip = styled.div`
    font-weight:bold;
  `