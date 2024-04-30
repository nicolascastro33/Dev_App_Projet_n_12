import { useSportSeeStore } from '../../provider/context'
import { nutrientPicture } from '../../utils/pictureNutrients'
import { nutrientBackgroundColor } from '../../utils/nutrientBackgroundColor'
import NutrientCard from './card'
import { useEffect } from 'react'
import { AllNutrientsWrapper } from './styles'

const NutrientsCardData = (nutrient: string, amount: number | undefined) => {
  const unit = nutrient === 'Calories' ? 'kCal' : 'g'
  const logo = nutrientPicture(nutrient)
  const backgroundColor = nutrientBackgroundColor(nutrient)
  return { unit, nutrient, logo, backgroundColor, amount }
}

function NutrientsCard() {
  const { mainData, userId, getMainData } = useSportSeeStore((state) => state)

  useEffect(() => {
    if ((!mainData || userId !== mainData?.id) && userId) getMainData(userId)
  }, [getMainData, mainData, userId])

  return (
    <AllNutrientsWrapper>
      <NutrientCard
        data={NutrientsCardData('Calories', mainData?.keyData.calorieCount)}
      />
      <NutrientCard
        data={NutrientsCardData('Protéines', mainData?.keyData.proteinCount)}
      />
      <NutrientCard
        data={NutrientsCardData(
          'Glucides',
          mainData?.keyData.carbohydrateCount
        )}
      />
      <NutrientCard
        data={NutrientsCardData('Lipides', mainData?.keyData.lipidCount)}
      />
    </AllNutrientsWrapper>
  )
}

export default NutrientsCard
