
/** 
  * @param  {formatterDataPerformance} function
  * @param  {data} array
  * @return {formatData} array
  */ 
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

/** 
  * @param  {formatterDataScore} function
  * @param  {dataUser} array
  * @return {data} array
  * @return {labelPourcent} number
  */  
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
          
/** 
  * @param  {formatterDataAverageSessions} function
  * @param  {data} array
  * @return {data} array
  */    
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

/** 
  * @param  {formatterDataActivity} function
  * @param  {data} array
  * @return {data} array
  */
export function formatterDataActivity(data) {
    for (let i = 0 ; i < data.length ; i ++) {
        let day = parseInt(data[i].day.split('-')[2]);
          data[i].day = day; 
      }
      return data;
}

export function formatterKilo(value){
    // let data = new Intl.NumberFormat("en-IN", {style: "decimal", maximumFractionDigits: 0}.format(value));
        var str = value.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");    
}