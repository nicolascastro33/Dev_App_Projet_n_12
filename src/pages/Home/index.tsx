import UserAverageSessionChart from '../../components/Charts/UserAverageSessionsChart'
import UsertActivityChart from '../../components/Charts/UsertActivityChart'
import UserPerformanceChart from '../../components/Charts/UserPerformanceChart'
import UserScoreChart from '../../components/Charts/UserScoreChart'
import NutrientCard from '../../components/NutrientCard'
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '../../data/data'

import {
  MainWrapper,
  AllChartsWrapper,
  AllNutrientsWrapper,
  TextWrapper,
  AllDataWrapper,
  ChartWrapper,
} from './style'

function Home() {
  const firstName = USER_MAIN_DATA.userInfos.firstName
  const nutrients = USER_MAIN_DATA.keyData
  return (
    <MainWrapper>
      <TextWrapper>
        <h1>Bonjour {firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </TextWrapper>
      <AllDataWrapper>

        
        {/* All of the Charts Data */}
        <AllChartsWrapper>
          <ChartWrapper>
            <UsertActivityChart sessions={USER_ACTIVITY.sessions} />
          </ChartWrapper>
          <ChartWrapper>
            <UserAverageSessionChart
              sessions={USER_AVERAGE_SESSIONS.sessions}
            />
          </ChartWrapper>
          <ChartWrapper>
            <UserPerformanceChart data={USER_PERFORMANCE.data} />
          </ChartWrapper>

          <ChartWrapper>
            <UserScoreChart score={USER_MAIN_DATA.score} />
          </ChartWrapper>
        </AllChartsWrapper>

        {/*All of the Nutrition Data */}
        <AllNutrientsWrapper>
          <NutrientCard nutrient="Calories" amount={nutrients.calorieCount} />
          <NutrientCard nutrient="Protéines" amount={nutrients.proteinCount} />
          <NutrientCard
            nutrient="Glucides"
            amount={nutrients.carbohydrateCount}
          />
          <NutrientCard nutrient="Lipides" amount={nutrients.lipidCount} />
        </AllNutrientsWrapper>
      </AllDataWrapper>
    </MainWrapper>
  )
}

export default Home
