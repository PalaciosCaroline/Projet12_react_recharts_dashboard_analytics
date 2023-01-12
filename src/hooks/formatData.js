export function formatterDataPerformance(data){
    const InverseDataKing = data.sort((a, b) => (b.king > a.king ? 1 : -1))
    const formatData = InverseDataKing.map((data) => { 
        switch (data.kind) {
            case 1:
                return { ...data, kind: 'Cardio' };
            case 2:
                return { ...data, kind: 'Energie' };
            case 3:
                return { ...data, kind: 'Endurance' };
            case 4:
                return { ...data, kind: 'Force' };
            case 5:
                return { ...data, kind: 'Vitesse' };
            case 6:
                return { ...data, kind: 'Intensité' };
            default:
                return {...data };
        }
    });
    return formatData;
}

export function formatterDataScore(dataUser){
    const score =  dataUser.todayScore ? dataUser.todayScore : dataUser.score;
    const labelPourcent = score * 100;
  
    const data = [
      {
        fill: "transparent",
        todayScore: 1,
     
      },
      {
        fill: "red",
        todayScore: `${score}`,
        name:`${labelPourcent}% de vos objectif`
      },
    ]
    return {data,labelPourcent} ;
}
          
    
export function formatterDataAverageSessions(data){

    const formatData = data.map((data) => { 
        switch (data.day) {
        case 1:
            return { ...data, day: 'L' } ;

        case 2:
            return  { ...data, day: 'M' };

        case 3:
            return  { ...data, day: 'M' };

        case 4:
            return { ...data, day: 'J' };
        
        case 5:
            return  { ...data, day: 'V' };

        case 6:
            return { ...data, day: 'S' };
        
        case 7:
            return { ...data, day: 'D' };
        
        default:
            return null;
        }
  })
  return formatData;
}