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
  formatterDataPerformance,
  formatterDataAverageSessions,
  formatterDataActivity,
  formatterKilo,
} from '../../utils/formatData'
import {Keyfigures,SessionWrapper,Column1,BoxResult,BoxTitle,Wrapped} from './dashboard.style'

/** render Main Dashboard
 * @param { id } string
 * @param { type } string
 * @type {FC React} BoxScore,BoxScore,AverageSessions, DailyActivity, KeyfigureCard
 * @type {function(id:string, type:string) => promise} getData
 * @type {object} userInfos userPerformance userAverageSessions userActivity
 * @type {function} formatterDataPerformance, formatterDataAverageSessions, formatterDataActivity, * *        formatterKilofunction JS
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
      const request = await getData(id, 'mainInfos')
      if (!request) return alert('data error')
      setUserInfos(request.data)
    }
    data()
  }, [id])

  useEffect(() => {
    const averageSessions = async () => {
      const res = await getData(id, 'averageSessions')
      if (!res) return alert('data error')
      const data = formatterDataAverageSessions(res.data.sessions)
      setUserAverageSessions(data)
    }
    averageSessions()
  }, [id])

  useEffect(() => {
    const performance = async () => {
      const res = await getData(id, 'performance')
      if (!res) return alert('data error')
      const data = formatterDataPerformance(res.data.data)
      setUserPerformance(data)
    }
    performance()
  }, [id])

  useEffect(() => {
    const activity = async () => {
      const res = await getData(id, 'activity')
      if (!res) return alert('data error')
      const data = formatterDataActivity(res.data.sessions)
      setUserActivity(data)
    }
    activity()
  }, [id])

  if (userInfos.length === 0) return null
  let valueKilo = formatterKilo(userInfos.keyData.calorieCount)

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
          <KeyfigureCard type="Calories" value={valueKilo} />
          <KeyfigureCard
            type="Protéines"
            value={userInfos.keyData.proteinCount.toString()}
          />
          <KeyfigureCard
            type="Glucides"
            value={userInfos.keyData.carbohydrateCount.toString()}
          />
          <KeyfigureCard
            type="Lipides"
            value={userInfos.keyData.lipidCount.toString()}
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

