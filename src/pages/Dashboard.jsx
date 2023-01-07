import React from 'react'
// import { useApi } from './../hooks/useApi.hook'
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
          <Title>Bonjour<Name>{id ? id : ""}</Name></Title>
        
          <p>Félicitations ! Vous avez explosé vos objectifs hier
                &nbsp;👏</p>
            <BoxResult>
              <Activity>

              </Activity>

              <SessionDuring>

              </SessionDuring>
            </BoxResult>

        </Wrapped>
        )

}

const Wrapped = styled.div`
  display: flex;
  flex-direction : column;
  padding:68px 9% 88px 224px;
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
  display:grid;
  grid-template-columns: repeat (4, 1fr);
  grid-template-rows: repeat (100, 1fr); 
  grid-gap:25px;
  height: 100%;
  
`

const Activity = styled.article`
color: rgba(0,0,0,0.2);
grid: 1/1/4/65;
background-color:blue;
`
const SessionDuring = styled.article`
color: rgba(0,0,0,0.2);
grid: 1/1/4/65;
background-color:blue;
`