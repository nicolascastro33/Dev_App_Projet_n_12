import NutrientCard from '../../components/NutrientCard'
import Charts from '../../components/Charts'
import { useSportSeeStore } from '../../provider/context'

import {
  MainWrapper,
  AllNutrientsWrapper,
  TextWrapper,
  AllDataWrapper,
} from './style'
import { useEffect } from 'react'

function Home() {
  const { mainData, getMainData } = useSportSeeStore((state) => state)
  useEffect(() => {
    getMainData(18)
  }, [getMainData])

  return (
    <MainWrapper>
      <TextWrapper>
        <h1>
          Bonjour{' '}
          <span className="nameHeader">{mainData?.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </TextWrapper>
      <AllDataWrapper>
        <Charts />
        {/*All of the Nutrition Data */}
        <AllNutrientsWrapper>
          <NutrientCard
            nutrient="Calories"
            amount={mainData?.keyData.calorieCount}
          />
          <NutrientCard
            nutrient="Protéines"
            amount={mainData?.keyData.proteinCount}
          />
          <NutrientCard
            nutrient="Glucides"
            amount={mainData?.keyData.carbohydrateCount}
          />
          <NutrientCard
            nutrient="Lipides"
            amount={mainData?.keyData.lipidCount}
          />
        </AllNutrientsWrapper>
      </AllDataWrapper>
    </MainWrapper>
  )
}

export default Home
