import React, {useState, useEffect} from 'react'
// import { Navigate } from 'react-router';
// import { useFetch } from './../hooks/useApi.hook'
import { getUserInfosById } from '../mock/ApiData.mock';

import { useApi ,useApi2, getUserInfos, getData} from '../hooks/usefetch';
import { useParams } from "react-router";
import KeyfigureCard from '../components/KeyfigureCard';
import DailyActivity from '../components/DailyActivity';
import styled from 'styled-components'
import { palette } from './../theme/styledvariable'
import AverageSessions from './../components/AverageSessions';
import BoxRadar from './../components/BoxRadar';
import BoxScore  from '../components/BoxScore';

export default function Dashboard() {
  // const [userName, setUserName] = useState([])
  const [userInfos,setUserInfos] = useState([])
  const [userPerformance,setUserPerformance] = useState([])
  // const [firstName,setFirstName] = useState('')
    let { id } = useParams();
    //id = parseInt(id)
    // let navigate = Navigate();

    // const user = () => {
    //   const routeParams = useParams();
    // };

    // const { data: dataUser } = useApi({
    //   params: {
    //     userId : `${id}`
    //   },
    //   defaultValue: { results: [] }
    // });


    //   console.log(dataUser.data.userInfos)

    useEffect(() => {
      const data = async () => {
        const request = await getData(id, 'mainInfos');
        if (!request) return alert("data error");
        setUserInfos(request.data);
      };
      data();
    }, [id]);

    if (userInfos.length === 0) return null;

   


    let KeyData = {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50
    };


    return(
    
        <Wrapped>
          <BoxTitle>
          <h1>Bonjour&ensp;<span>{userInfos.userInfos.firstName}</span></h1>
        
          <p>Félicitations ! Vous avez explosé vos objectifs hier
                &nbsp;👏</p>
          </BoxTitle>

            <BoxResult>
              <Column1>
                <Activity>
                    <DailyActivity></DailyActivity>
                </Activity>
                <SessionWrapper>
                    <AverageSessions />
                   
                  {/* <StyleBoxRadar> */}
                    <BoxRadar />            
                  {/* </StyleBoxRadar> */}
                  <StyleBoxScore>
                    <BoxScore dataUser={userInfos}/>
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
  box-sizing:border-box;
  flex-direction : column;
  // padding:72px 90px 90px 224px;
  padding:72px 90px 90px 107px;
  margin: auto;
  // width:100%;
  heigth:100%;
  @media (max-width: 1400px) {
    padding:40px 50px 50px 63px;
  } 
  @media (max-width: 1250px) {
    padding:40px 70px 50px 107px;
  } 
  @media (max-width: 1150px) {
    padding:40px 40px 50px 43px;
  } 
  @media (max-width: 1100px) {
    width:90%;
  } 
  @media (max-width: 1000px) {
    width:80%;
  } 
  @media (max-width: 600px) {
    padding:72px 20px 90px 20px;
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
  // width:100%;
  heigth:630px;
  gap:30px;
  @media (max-width: 1300px) {
    flex-direction :column;
    height:auto;
    gap:20px;
  }
`
const Column1 = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-between;
  gap:30px;
 

 @media (max-width: 1250px) {
  width:100%;
  gap:20px;
}

`

const Activity = styled.section`
  color: rgba(0,0,0,0.2);
  background-color:rgba(251, 251, 251, 1);
  width:100%;
   
`
const SessionWrapper = styled.section`
  color: rgba(0,0,0,0.2);
  width:100%;
  display:flex;
  heigth:263px;
  gap:30px;
  justify-content: space-between;
  @media (max-width: 1250px) {
    width:100%;
    flex-wrap:wrap;
    height:auto;
  }
  @media (max-width: 1010px) {
    justify-content: space-around;
  }
  
`

const Keyfigures = styled.section`
  // width:23%;
  display: flex;
  flex-wrap:wrap;
  align-content: space-between;
  justify-content: space-between;
  @media (max-width: 1300px) {
    width:100%;
  }
  article{
    min-width:160px;
    width:100%;
    heigth:124px;
    @media (max-width: 1300px) {
      width:43%;
      gap:30px;
      margin-top:30px;
    }
    @media (max-width: 680px) {
      width:90%;
      gap:20px;
      margin:30px auto 20px;
    }
    
  }
`

// const StyleBoxRadar = styled.article`
// box-sizing:border-box;
//   background-color: ${palette.colorPrimary};
//   color:#fff;
//   // width:31%
//   padding: 8px 8px 8px 8px;
//   @media (max-width: 1150px) {
//     height:245px;
//   } 
//   @media (max-width: 1010px) {
//     width: 300px ;
//     height: 300px;
//   } 
// `

const StyleBoxScore = styled.article`
  position:relative;
  background-color: rgba(251, 251, 251, 1);
`


