import { ChartsWrapper, ChartWrapper } from './style'
import UserActivityChart from './UserActivityChart'
import UserAverageSessionChart from './UserAverageSessionsChart'
import UserPerformanceChart from './UserPerformanceChart'
import UserScoreChart from './UserScoreChart'

import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '../../data/data'

function Charts() {
  return (
    <ChartsWrapper>
      <ChartWrapper>
        <UserActivityChart sessions={USER_ACTIVITY.sessions} />
      </ChartWrapper>
      <ChartWrapper>
        <h2>Durée moyenne des sessions</h2>
        <UserAverageSessionChart sessions={USER_AVERAGE_SESSIONS.sessions} />
      </ChartWrapper>
      <ChartWrapper>
        <UserPerformanceChart data={USER_PERFORMANCE.data} />
      </ChartWrapper>
      <ChartWrapper>
        <h2>Score</h2>
        <UserScoreChart score={USER_MAIN_DATA.score} />
      </ChartWrapper>
    </ChartsWrapper>
  )
}

export default Charts
