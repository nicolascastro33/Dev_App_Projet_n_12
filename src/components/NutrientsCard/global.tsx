import { useSportSeeStore } from '../../provider/context'
import { NutrientsCardData } from './data'
import NutrientCard from './card'
import { useEffect } from 'react'
import { AllNutrientsWrapper } from './styles'


function NutrientsCard() {
  const { mainData, userId, getMainData } = useSportSeeStore((state) => state)

  useEffect(() => {
    if ((!mainData || userId !== mainData?.data.id) && userId)
      getMainData(userId)
  }, [getMainData, mainData, userId])

  return (
    <AllNutrientsWrapper>
      <NutrientCard
        data={NutrientsCardData(
          'Calories',
          mainData?.data.keyData.calorieCount
        )}
      />
      <NutrientCard
        data={NutrientsCardData(
          'Protéines',
          mainData?.data.keyData.proteinCount
        )}
      />
      <NutrientCard
        data={NutrientsCardData(
          'Glucides',
          mainData?.data.keyData.carbohydrateCount
        )}
      />
      <NutrientCard
        data={NutrientsCardData('Lipides', mainData?.data.keyData.lipidCount)}
      />
    </AllNutrientsWrapper>
  )
}

export default NutrientsCard
