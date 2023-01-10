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
          <BoxTitle>
          <Title>Bonjour<Name>{id}</Name></Title>
        
          <p>Félicitations ! Vous avez explosé vos objectifs hier
                &nbsp;👏</p>
          </BoxTitle>
            <BoxResult>
              <Column1>
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
              </Column1>
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
  padding:72px 90px 0 224px;
  height: 100vh;
  width:100%;
  @media (max-width: 1400px) {
    padding:40px 50px 0 180px;
  } 
`

const BoxTitle = styled.header`
  margin-bottom:50px;
`

const Title = styled.h1`
  font-size:3rem;
  margin: 0 0 25px 0;
`

const Name = styled.span`
  color: ${palette.colorName};
`
const BoxResult = styled.section`
  display: grid;
  grid-template-columns: minmax(834px, auto) minmax(200px, 260px);
  height: 100%;
  width:100%;
  gap:30px;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`
const Column1 = styled.div`
 column:1;
 justify-content: space-between;
 margin-bottom:50px;
 height:611px;
 @media (max-width: 1300px) {
  width:100%
}
`

const Activity = styled.section`
  color: rgba(0,0,0,0.2);
  margin-bottom:30px;
  height: 320px;
  background-color:rgba(251, 251, 251, 1);
`
const SessionWrapper = styled.section`
  color: rgba(0,0,0,0.2);
  height:263px;
  display:flex;
  justify-content: space-between;
  gap:30px;
`

const Keyfigures = styled.section`
  // margin-left: 31px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  max-height:611px;
  gap:20px;
  margin-bottom:50px;
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
  min-width:258px;
`

const StyleBoxScore = styled.article`
  poition:relative;
  column : 1fr;
  background-color: rgba(251, 251, 251, 1);
  min-width:258px;
`

