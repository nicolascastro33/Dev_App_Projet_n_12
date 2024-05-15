import { useSportSeeStore } from '../../../provider/context'
import { NutrientsCardData } from '../data'
import NutrientsCardView from './view'

function NutrientsCard() {
  const { keyData } = useSportSeeStore((state) => state)

  const data = keyData && {
    calorie: NutrientsCardData('Calories', keyData.calorieCount),
    protein: NutrientsCardData('Protéines', keyData.proteinCount),
    carbohydrate: NutrientsCardData('Glucides', keyData.carbohydrateCount),
    lipid: NutrientsCardData('Lipides', keyData.lipidCount),
  }

   if(data)return <NutrientsCardView data={data} />
}

export default NutrientsCard
