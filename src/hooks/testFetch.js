// import { useEffect, useState } from "react";
// import {getUserById} from './../mock/ApiData.mock'

// export default function useFetchTest(id){

//     const [data,setData] = useState(null)
  
   
//     useEffect(() => {
//         (
//             async function(){
//                 try{
//                     const response = await getUserById(id)
//                     console.log(response)
//                     setData(response.data)
//                 }catch(err){
//                     console.log(err)
//                 }
//             }
//         )()
//     }, [id])

//     return { data}

// }