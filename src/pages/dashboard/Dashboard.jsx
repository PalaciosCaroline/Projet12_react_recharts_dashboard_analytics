import PropTypes from 'prop-types'
// import { getUserInfosById } from '../mock/ApiData.mock'
import useFetch from '../../hooks/usefetch'
import { useParams,  } from 'react-router'
import KeyfigureCard from '../../components/keyfigurecard/KeyfigureCard'
import DailyActivity from '../../components/dailyactivity/DailyActivity'
import AverageSessions from '../../components/averagesessions/AverageSessions'
import BoxRadar from '../../components/boxradar/BoxRadar'
import BoxScore from '../../components/boxscore/BoxScore'
import { formatKilo } from '../../utils/formatData'
import caloriesIcon from './../../assets/calories-icon.png'
import fatIcon from './../../assets/fat-icon.png'
import proteinIcon from './../../assets/protein-icon.png'
import carbsIcon from './../../assets/carbs-icon.png'
import {Keyfigures,SessionWrapper,Column1,BoxResult,BoxTitle,Wrapped} from './dashboard.style'

/** render Main Dashboard
 * @param { id } string
 * @param { type } string
 * @type {FC React} BoxScore,BoxScore,AverageSessions, DailyActivity, KeyfigureCard
 * @type {function(id:string, type:string) => promise} getData
 * @type {object} dataInfos dataPerformance dataAverageSessions dataActivity
 * @type {function} formatDataPerformance, formatDataAverageSessions, formatDataActivity, * *        formatKilofunction JS
 * @return {JSX FC React}
 */
export default function Dashboard() {
  let { id } = useParams()

  const { data: dataUserInfos } = useFetch(id, 'userInfos');
  const { data: dataPerformance } = useFetch(id, 'performance');
  const {data: dataActivity } = useFetch(id, 'activity');
  const {data: dataAverageSessions } = useFetch(id, 'averageSessions');

  let valueKilo = dataUserInfos ? formatKilo(dataUserInfos.keyData.calorieCount) : "";

  return (
    <Wrapped>
      <BoxTitle>
        <h1>
          Bonjour&ensp;<span>{dataUserInfos && dataUserInfos.userInfos.firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier &nbsp;👏</p>
      </BoxTitle>
      <BoxResult>
        <Column1>
          <DailyActivity dataActivity={dataActivity} />
          <SessionWrapper>
            <AverageSessions dataAverageSessions={dataAverageSessions} />
            <BoxRadar dataPerformance={dataPerformance} />
            {dataUserInfos && <BoxScore dataUser={dataUserInfos} /> }
          </SessionWrapper>
        </Column1>
      {dataUserInfos && 
        (<Keyfigures>
          <KeyfigureCard  img={caloriesIcon} type="Calories" value={`${valueKilo}Kcal`} />
          <KeyfigureCard
            img={proteinIcon}
            type="Protéines"
            value={`${dataUserInfos.keyData.proteinCount}g`}
          />
          <KeyfigureCard
            img={carbsIcon}
            type="Glucides"
            value={`${dataUserInfos.keyData.carbohydrateCount}g`}
          />
          <KeyfigureCard
            img={fatIcon}
            type="Lipides"
            value={`${dataUserInfos.keyData.lipidCount}g`}
          />
        </Keyfigures>)}
      </BoxResult>
    </Wrapped>
  )
}

Dashboard.propTypes = {
  dataUser: PropTypes.object,
  averageSessions: PropTypes.func,
  performance: PropTypes.func,
  activity: PropTypes.func,
  getData: PropTypes.func,
  userInfos: PropTypes.object,
  userPerformance: PropTypes.object,
  userActivity: PropTypes.object,
  userAverageSessions: PropTypes.object,
  formatterKilo: PropTypes.func,
  valueKilo: PropTypes.any,
  data: PropTypes.object,
  labelPourcent: PropTypes.number,
}

