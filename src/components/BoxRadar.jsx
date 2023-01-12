import React, {useState, useEffect}  from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import {formatterDataPerformance} from '../hooks/formatData'
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'
import { getData} from '../hooks/usefetch';
import { useParams } from "react-router";

export default function BoxRadar() {
  const [userPerformance,setUserPerformance] = useState([])
  let {id} = useParams();

  useEffect(() => {
    const Performance = async () => {
      const request = await getData(id, 'performance');
      if (!request) return alert("data error");
      const data = formatterDataPerformance(request.data.data)
      setUserPerformance(data);
    };
    Performance();
  }, [id]);

  if (userPerformance.length === 0) return null;

  return (
    <BoxRadarChart>
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance} >
          <PolarGrid gridType="polygon" />
         
          <PolarAngleAxis dataKey="kind"  tick={{ fontSize: 8 }} stroke='white' tickLine={false} axisLine={false}/>
          
          <Radar dataKey="value" stroke='#FF0101'  fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    
    </BoxRadarChart>
  )
}


const BoxRadarChart = styled.article`
  width: 263px ;
  height: 263px;
  box-sizing:border-box;
  background-color: ${palette.colorPrimary};
  color:#fff;
  // width:31%
  padding: 8px 8px 8px 8px;
  @media (max-width: 1150px) {
    height:245px;
  } 
  @media (max-width: 1010px) {
    width: 300px ;
    height: 300px;
  } 
  
  @media (max-width: 1150px) {
    width: 245px ;
    height: 245px;
  } 
  @media (max-width: 1010px) {
    width: 300px ;
    height: 300px;
  } 
  @media (max-width: 450px) {
    width: 260px ;
    height: 260px;
  } 
`