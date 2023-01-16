import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { getUserInfosById } from '../mock/ApiData.mock'
import { useApi, getData } from '../../hooks/usefetch'
import { useParams } from 'react-router'
import KeyfigureCard from '../../components/keyfigurecard/KeyfigureCard'
import DailyActivity from '../../components/dailyactivity/DailyActivity'
import AverageSessions from '../../components/averagesessions/AverageSessions'
import BoxRadar from '../../components/boxradar/BoxRadar'
import BoxScore from '../../components/boxscore/BoxScore'
import {
  formatDataPerformance,
  formatDataAverageSessions,
  formatDataActivity,
  formatKilo,
} from '../../utils/formatData'
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
 * @type {object} userInfos userPerformance userAverageSessions userActivity
 * @type {function} formatDataPerformance, formatDataAverageSessions, formatDataActivity, * *        formatKilofunction JS
 * @return {JSX FC React}
 */
export default function Dashboard() {
  const [userInfos, setUserInfos] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userActivity, setUserActivity] = useState([])
  let { id } = useParams()
  //id = parseInt(id)

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
      const res = await getData(id, 'mainInfos')
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données générales')
      setUserInfos(res.data)
    }
    data()
  }, [id])

  useEffect(() => {
    const averageSessions = async () => {
      const res = await getData(id, 'averageSessions')
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données de durée moyenne des sessions')
      const data = formatDataAverageSessions(res.data.sessions)
      setUserAverageSessions(data)
    }
    averageSessions()
  }, [id])

  useEffect(() => {
    const performance = async () => {
      const res = await getData(id, 'performance')
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données de performance')
      const data = formatDataPerformance(res.data.data)
      setUserPerformance(data)
    }
    performance()
  }, [id])

  useEffect(() => {
    const activity = async () => {
      const res = await getData(id, 'activity')
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données sur l\'activité quotidienne')
      const data = formatDataActivity(res.data.sessions)
      setUserActivity(data)
    }
    activity()
  }, [id])

  if (userInfos.length === 0) return null
  let valueKilo = formatKilo(userInfos.keyData.calorieCount)

  return (
    <Wrapped>
      <BoxTitle>
        <h1>
          Bonjour&ensp;<span>{userInfos.userInfos.firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier &nbsp;👏</p>
      </BoxTitle>
      <BoxResult>
        <Column1>
          <DailyActivity userActivity={userActivity} />
          <SessionWrapper>
            <AverageSessions id='boxLine' userAverageSessions={userAverageSessions} />
            <BoxRadar userPerformance={userPerformance} />
            <BoxScore dataUser={userInfos} />
          </SessionWrapper>
        </Column1>
        <Keyfigures>
          <KeyfigureCard  img={caloriesIcon} type="Calories" value={`${valueKilo}Kcal`} />
          <KeyfigureCard
            img={proteinIcon}
            type="Protéines"
            value={`${userInfos.keyData.proteinCount.toString()}g`}
          />
          <KeyfigureCard
            img={carbsIcon}
            type="Glucides"
            value={`${userInfos.keyData.carbohydrateCount.toString()}g`}
          />
          <KeyfigureCard
            img={fatIcon}
            type="Lipides"
            value={`${userInfos.keyData.lipidCount.toString()}g`}
          />
        </Keyfigures>
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
  valueKilo: PropTypes.string,
  data: PropTypes.object,
  labelPourcent: PropTypes.number,
}

