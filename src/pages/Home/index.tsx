import NutrientCard from '../../components/NutrientCard'
import Charts from '../../components/Charts'
import { USER_MAIN_DATA } from '../../data/data'

import {
  MainWrapper,
  AllNutrientsWrapper,
  TextWrapper,
  AllDataWrapper,
} from './style'

function Home() {
  const firstName = USER_MAIN_DATA.userInfos.firstName
  const nutrients = USER_MAIN_DATA.keyData
  return (
    <MainWrapper>
      <TextWrapper>
        <h1>
          Bonjour <span className="nameHeader">{firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </TextWrapper>
      <AllDataWrapper>
        <Charts />
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
