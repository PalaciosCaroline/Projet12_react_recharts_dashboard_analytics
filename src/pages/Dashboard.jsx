import React from 'react'
// import { useApi } from './../hooks/useApi.hook'
// import {getFirstName} from './../mook/ApiData.mook'
import { useParams } from "react-router";
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
    
  


    return(
    
        <Wrapped>
          <Title>Bonjour<Name>{id}</Name></Title>
        
          <p>Félicitations ! Vous avez explosé vos objectifs hier
                &nbsp;👏</p>
            <BoxResult>
              <Activity>

              </Activity>

              <SessionDuring>

              </SessionDuring>

              <Keyfigures>
               <Article></Article>
               <Article></Article>
               <Article></Article>
               <Article></Article>

              </Keyfigures>

            </BoxResult>

        </Wrapped>
 
        )

}

const Wrapped = styled.div`
  display: flex;
  flex-direction : column;
  padding:68px 9% 0 224px;
  height: 100%;
  width:100%;
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
  // display:grid;
  // grid-template-columns: 3fr 1fr;
  // grid-template-rows: 100fr; 
  // grid-gap:25px;
  display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(100, 1fr);
// grid-column-gap: 20px;
// grid-row-gap: 20px;
  height: 100%;
  
`

const Activity = styled.section`
color: rgba(0,0,0,0.2);
grid-column: 1 / 4;
  grid-row: 1 / 55;
margin-bottom:28px;
min-height: 320px;
background-color:blue;
`
const SessionDuring = styled.section`
color: rgba(0,0,0,0.2);
grid-column: 1 / 4;
  grid-row: 55 / 100;
min-height:263px;
background-color:red;
`

const Keyfigures = styled.section`
margin-left: 31px;
  grid-column: 4 / 5;
  grid-row: 1 / 100;
  background-color: green;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`

const Article = styled.article`
  width:100%;
  height:124px;
  background: grey;

`