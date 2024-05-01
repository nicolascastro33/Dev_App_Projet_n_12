import { useSportSeeStore } from '../../../provider/context'
import { NutrientsCardData } from '../data'
import { useEffect } from 'react'
import NutrientsCardView from './view'



function NutrientsCard() {
  const { mainData, userId, getMainData } = useSportSeeStore((state) => state)

  useEffect(() => {
    if ((!mainData || userId !== mainData?.data.id) && userId)
      getMainData(userId)
  }, [getMainData, mainData, userId])

  const data = {
    calorie: NutrientsCardData('Calories', mainData?.data.keyData.calorieCount),
    protein: NutrientsCardData(
      'Protéines',
      mainData?.data.keyData.proteinCount
    ),
    carbohydrate: NutrientsCardData(
      'Glucides',
      mainData?.data.keyData.carbohydrateCount
    ),
    lipid: NutrientsCardData('Lipides', mainData?.data.keyData.lipidCount),
  }
  return (
    <NutrientsCardView data={data}/>
  )
}

export default NutrientsCard
