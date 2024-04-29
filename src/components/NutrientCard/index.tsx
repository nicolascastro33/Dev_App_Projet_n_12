import { ImgWrapper, NutrientCardWrapper, TextWrapper } from './styles'
import { nutrientPicture } from '../../utils/pictureNutrients'
import { nutrientBackgroundColor } from '../../utils/nutrientBackgroundColor'

interface NutrientProps {
  nutrient: string
  amount: number|undefined
}

function NutrientCard({ nutrient, amount }: NutrientProps) {
  const unit = nutrient === "Calories" ? "kCal" : "g"
  const logo = nutrientPicture(nutrient)
  const backgroundColor:string|undefined = nutrientBackgroundColor(nutrient)
  return (
    <NutrientCardWrapper>
      <ImgWrapper $backgroundColor={backgroundColor}>
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
