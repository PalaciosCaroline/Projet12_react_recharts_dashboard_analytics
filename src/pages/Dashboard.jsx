import React from 'react'
// import { useApi } from './../hooks/useApi.hook'
import { useParams } from "react-router";


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
        <>
          <h1>Bonjour {id}</h1>

        </>
        )

}