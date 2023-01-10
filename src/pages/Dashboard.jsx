import React, {useState, useEffect} from 'react'
// import { Navigate } from 'react-router';
// import { useFetch } from './../hooks/useApi.hook'
// import { getUserById, getDataInfos } from '../mock/ApiData.mock';


import { useParams } from "react-router";
import KeyfigureCard from '../components/KeyfigureCard';
import DailyActivity from '../components/DailyActivity';
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'
import AverageSessions from './../components/AverageSessions';
import BoxRadar from './../components/BoxRadar';
import BoxScore  from '../components/BoxScore';

export default function Dashboard() {
// const [dataUserInfos, setDataUserInfos] = useState([])
  const [dataUserInfos,setDataUserInfos] = useState([])
    let { id } = useParams();

    // let navigate = Navigate();

    // const user = () => {
    //   const routeParams = useParams();
    // };
  
    // const { data: datasUser } = useApi({
    //     params: {
    //       useId: `${userId}`
    //     },
    //     defaultValue: { results: [] }
    //   });

    //   console.log(datasUser)



// let data = getUserById(12)


console.log(dataUserInfos)

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

              <SessionWrapper>
               
               <StyleAverageSessions>
                <AverageSessions></AverageSessions>
                </StyleAverageSessions>
              
                <StyleBoxRadar>
                <BoxRadar />            
                </StyleBoxRadar>
                <StyleBoxScore>
                <BoxScore />
                </StyleBoxScore>

              
              </SessionWrapper>

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
  padding:72px 9% 0 224px;
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
  margin-top:50px;
  // margin-bottom: 45px;
  display: grid;
  grid-template-columns: 858px 1fr;
  grid-template-rows: repeat(100, 1fr);
  height: 100%;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr;
    grid-auto-flow: row;
  }
`

const Activity = styled.section`
  color: rgba(0,0,0,0.2);
  grid-column: 1 / 4;
    grid-row: 1 / 55;
  margin-bottom:30px;
  height: 320px;
  background-color:rgba(251, 251, 251, 1);
  @media (max-width: 1300px) {
    grid-row: 1/2;
  }
`
const SessionWrapper = styled.section`
  color: rgba(0,0,0,0.2);
  grid-column: 1 / 4;
  grid-row: 55 / 100;
  height:263px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: minmax(258, auto);
  gap:30px;
  @media (max-width: 1300px) {
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
  

  @media (max-width: 1300px) {
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

const StyleAverageSessions = styled.article`
  background-color: ${palette.colorSecondary};
  column : 1fr;
  color:#fff;
  min-width:258px;
`
const StyleBoxRadar = styled.article`
  column : 1fr;
  background-color: ${palette.colorPrimary};
  color:#fff;
  padding: 8px 8px 8px 8px;
  max-height: 263px;
  min-width:258px;
`

const StyleBoxScore = styled.article`
  poition:relative;
  column : 1fr;
  background-color: rgba(251, 251, 251, 1);
  min-width:208px;
`

