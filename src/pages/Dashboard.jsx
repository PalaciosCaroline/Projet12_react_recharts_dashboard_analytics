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
          <h1>Bonjour<span>{id}</span></h1>
        
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
  padding:72px 90px 90px 224px;
  width:100%;
  heigth:100%;
  @media (max-width: 1400px) {
    padding:40px 50px 50px 180px;
  } 
`

const BoxTitle = styled.header`
  margin-bottom:50px;
 h1{
    font-size:3rem;
    margin: 0 0 25px 0;
  }
  span{
    color: ${palette.colorName};
  }
`

const BoxResult = styled.section`
  display:flex;
  justify-content:space-between;
  heigth:59vw;
  width:100%;
  heigth:615px;
  @media (max-width: 1200px) {
    flex-direction :column;
  }
`
const Column1 = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-between;

gap:30px;
 width:75%;

 @media (max-width: 1200px) {
  width:100%;
}

`

const Activity = styled.section`
  color: rgba(0,0,0,0.2);
  background-color:rgba(251, 251, 251, 1);
  width:100%;
  heigth:54%;
`
const SessionWrapper = styled.section`
  color: rgba(0,0,0,0.2);
  height:263px;
  width:100%;
  height:46%;
  display:flex;
  justify-content: space-between;
  max-heigth:280px;
  article{
    width:31%;
    heigth:100%;
  }
`

const Keyfigures = styled.section`
  width:23%;
  display: flex;
  flex-wrap:wrap;
  align-content: space-between;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width:100%;
  }
  article{
    min-width:160px;
    width:100%;
    heigth:124px;
    @media (max-width: 1200px) {
      width:46%;
      gap:30px;
      margin-top:30px;
    }
    
  }
`

const StyleAverageSessions = styled.article`
  background-color: ${palette.colorSecondary};
  width:31%;
  height:100%;
  color:#fff;
`
const StyleBoxRadar = styled.article`
  column : 1fr;
  background-color: ${palette.colorPrimary};
  color:#fff;
  width:31%;
  height:100%;
  padding: 8px 8px 8px 8px;
`

const StyleBoxScore = styled.article`
  poition:relative;
  width:31%;
  height:100%;
  background-color: rgba(251, 251, 251, 1);
`

