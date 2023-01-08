import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'

// export default function DailyActivity({data}) {
//   return (
//     <BarChart></BarChart>
//   )
// }


const USER_ACTIVITY = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
]

function renderTooltip() {
    return(
            <>
           
            </>
        )
}

export default class DailyActivity extends PureComponent {

    render() {
      return (
        <>
        <TitleActivity2>Activité quotidienne</TitleActivity2>
        <ResponsiveContainer width="100%" height="70%">
          <BarChart
            // width={}
            height={130}
            barCategoryGap={53}
            barGap={8}
            maxBarSize={130}
            data={USER_ACTIVITY}
            margin={{
              top: 30,
              right: 30,
              left: 30,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis dataKey="kilogram" orientation="right" domain={['dataMin - 1', 'dataMax + 1']}/>
            <Tooltip offset={20} 
               content={renderTooltip}
            />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey="kilogram" fill="rgba(40, 45, 48, 1)" barSize={6} />
            <Bar dataKey="calories" fill="rgba(230, 0, 0, 1)" barSize={6} />
          </BarChart>
        </ResponsiveContainer>
        </>
      );
    }
  }
  

  const TitleActivity2 = styled.h2`
  margin-top=24px;
  font-size:1.5rem;
  color:
  rgba(32, 37, 58, 1);

  `