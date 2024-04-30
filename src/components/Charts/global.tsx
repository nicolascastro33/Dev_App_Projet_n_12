import { ChartsWrapper, ChartWrapper } from './style'
import UserActivityChart from './UserActivityChart/controller'
import UserAverageSessionChart from './UserAverageSessionsChart/controller'
import UserPerformanceChart from './UserPerformanceChart/controller'
import UserScoreChart from './UserScoreChart/controller'

function Charts() {
  return (
    <ChartsWrapper>
      <ChartWrapper>
        <UserActivityChart />
      </ChartWrapper>
      <ChartWrapper>
        <h2>Durée moyenne des sessions</h2>
        <UserAverageSessionChart />
      </ChartWrapper>
      <ChartWrapper>
        <UserPerformanceChart />
      </ChartWrapper>
      <ChartWrapper>
        <h2>Score</h2>
        <UserScoreChart />
      </ChartWrapper>
    </ChartsWrapper>
  )
}

export default Charts
