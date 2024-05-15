import { AllNutrientsWrapper } from '../styles'
import NutrientCard from '../card'

interface NutrientCardProps {
  nutrient: string
  amount: number | undefined
  backgroundColor: string | undefined
  unit: string | undefined
  logo: string | undefined
}

interface NutrientsCardProps {
  data: {
    calorie: NutrientCardProps
    protein: NutrientCardProps
    carbohydrate: NutrientCardProps
    lipid: NutrientCardProps
  }
}

function NutrientsCardView({ data }: NutrientsCardProps) {
  return (
    <AllNutrientsWrapper>
      <NutrientCard data={data.calorie} />
      <NutrientCard data={data.protein} />
      <NutrientCard data={data.carbohydrate} />
      <NutrientCard data={data.lipid} />
    </AllNutrientsWrapper>
  )
}

export default NutrientsCardView
