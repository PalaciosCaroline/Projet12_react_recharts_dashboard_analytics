import { useApi } from './../hooks/api.hook.js'
import { useParams } from "react-router";


export default function Dashboard() {
    let { userId } = useParams();
  
    const { data: datasUser } = useApi({
        params: {
          useId: `${userId}`
        },
        defaultValue: { results: [] }
      });

    //   console.log(datasUser)
    

    return(
        <>

        </>
        )

}