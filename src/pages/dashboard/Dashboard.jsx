import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getUserActivityById, getUserPerformance,getUserAverageSession,getUserById } from './../../mock/ApiData.mock'
import { getData } from '../../hooks/usefetch'
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
  id = parseInt(id)

  useEffect(() => {
    const data = async () => {
      //call to API
      // const res = await getData(id, 'mainInfos')
      //call to datas mocked
        const res = await getUserById(id)
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données générales')
      setUserInfos(res)
    }
    data()
  }, [id])

  useEffect(() => {
    const averageSessions = async () => {
      //call to api
      // const res = await getData(id, 'averageSessions')
      //call to datas mocked
      const res = await getUserAverageSession(id)
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données de durée moyenne des sessions')
      const data = formatDataAverageSessions(res.sessions)
      setUserAverageSessions(data)
    }
    averageSessions()
  }, [id])

  useEffect(() => {
    const performance = async () => {
      //call to api
      // const res = await getData(id, 'performance')
      //call to datas mocked
        const res = await getUserPerformance(id)
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données de performance')
      const data = formatDataPerformance(res.data)
      setUserPerformance(data)
    }
    performance()
  }, [id])

  useEffect(() => {
    const activity = async () => {
      //call to api
      // const res = await getData(id, 'activity')
      //call to datas mocked
      const res = await getUserActivityById(id)
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données sur l\'activité quotidienne')
      const data = formatDataActivity(res.sessions)
      setUserActivity(data)
    }
    activity()
  }, [id])


  if (userInfos.length <= 0) return null
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
            <AverageSessions userAverageSessions={userAverageSessions} />
            <BoxRadar userPerformance={userPerformance} />
            <BoxScore dataUser={userInfos} />
          </SessionWrapper>
        </Column1>
        <Keyfigures>
          <KeyfigureCard  img={caloriesIcon} type="Calories" value={`${valueKilo}Kcal`} />
          <KeyfigureCard
            img={proteinIcon}
            type="Protéines"
            value={`${userInfos.keyData.proteinCount}g`}
          />
          <KeyfigureCard
            img={carbsIcon}
            type="Glucides"
            value={`${userInfos.keyData.carbohydrateCount}g`}
          />
          <KeyfigureCard
            img={fatIcon}
            type="Lipides"
            value={`${userInfos.keyData.lipidCount}g`}
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
  valueKilo: PropTypes.any,
  data: PropTypes.object,
  labelPourcent: PropTypes.number,
}

