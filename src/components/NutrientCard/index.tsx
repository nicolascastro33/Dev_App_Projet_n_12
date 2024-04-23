import { ImgWrapper, NutrientCardWrapper, TextWrapper } from './styles'
import { nutrientPicture } from '../../utils/pictureNutrients'

interface NutrientProps {
  nutrient: string
  amount: number
}

function NutrientCard({ nutrient, amount }: NutrientProps) {
  const unit = nutrient === "Calories" ? "kCal" : "g"
  const logo = nutrientPicture(nutrient)

  return (
    <NutrientCardWrapper>
      <ImgWrapper>
        <img src={logo} alt={`logo-${nutrient}`} />
      </ImgWrapper>
      <TextWrapper>
        <h3>
          {amount}
          {unit}
        </h3>
        <p>{nutrient}</p>
      </TextWrapper>
    </NutrientCardWrapper>
  )
}

export default NutrientCard
