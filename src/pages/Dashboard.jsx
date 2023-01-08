import React from 'react'
// import { useApi } from './../hooks/useApi.hook'
// import {getUserActivityById} from './../mock/ApiData.mock'
import { useParams } from "react-router";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import KeyfigureCard from '../components/KeyfigureCard';
import DailyActivity from '../components/DailyActivity';
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'

export default function Dashboard() {

    let { id } = useParams();
    
    // const user = () => {
    //   const routeParams = useParams();
    // };
  
    //userId = 12;
  
    // const { data: datasUser } = useApi({
    //     params: {
    //       useId: `${userId}`
    //     },
    //     defaultValue: { results: [] }
    //   });

    //   console.log(datasUser)
    

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


    let KeyData = {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50
    };


    return(
    
        <Wrapped>
          <Title>Bonjour<Name>{id}</Name></Title>
        
          <p>Félicitations ! Vous avez explosé vos objectifs hier
                &nbsp;👏</p>
            <BoxResult>
              <Activity>
                  <DailyActivity></DailyActivity>
              </Activity>

              <SessionDuring>

              </SessionDuring>

              <Keyfigures>

              <KeyfigureCard type='Calories' value={KeyData.calorieCount}></KeyfigureCard>
              <KeyfigureCard type='Protéines' value={KeyData.proteinCount}></KeyfigureCard>
              <KeyfigureCard type='Glucides' value={KeyData.carbohydrateCount}></KeyfigureCard>
              <KeyfigureCard type='Lipides' value={KeyData.lipidCount}></KeyfigureCard>               
              </Keyfigures>

            </BoxResult>

        </Wrapped>
 
        )

}

const Wrapped = styled.div`
  display: flex;
  flex-direction : column;
  padding:77px 9% 0 224px;
  height: 100%;
  width:100%;
  @media (max-width: 1300px) {
    padding:77px 50px 0 167px;
  }
`

const Title = styled.h1`
  font-size:3rem;
  margin: 0 0 25px 0;
`

const Name = styled.span`
  color: ${palette.colorName};
`
const BoxResult = styled.section`
  margin-bottom: 55px;
  display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(100, 1fr);
  height: 100%;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr;
    grid-auto-flow: row;
  }
`

const Activity = styled.section`
color: rgba(0,0,0,0.2);
grid-column: 1 / 4;
  grid-row: 1 / 55;
margin-bottom:28px;
min-height: 320px;
background-color:rgba(251, 251, 251, 1);
@media (max-width: 1100px) {
  grid-row: 1/2;
}
`
const SessionDuring = styled.section`
color: rgba(0,0,0,0.2);
grid-column: 1 / 4;
grid-row: 55 / 100;
min-height:263px;
background-color:red;
@media (max-width: 1100px) {
  grid-row: 2/3;
  gap:20px;
}
`

const Keyfigures = styled.section`
  margin-left: 31px;
  grid-column: 4 / 5;
  grid-row: 1 / 100;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  

  @media (max-width: 1100px) {
    flex-direction:row;
    margin-left:0;
    margin-top:28px;
    grid-column : 1/2;
    grid-row: 3 / 4;
    height:auto;
    flex-wrap:wrap;
    gap:20px;
  }
`

