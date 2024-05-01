import { ImgWrapper, NutrientCardWrapper, TextWrapper } from '../styles'

interface NutrientCardProps {
  data: {
    nutrient: string
    amount: number | undefined
    backgroundColor: string | undefined
    unit: string | undefined
    logo: string | undefined
  }
}

function NutrientCard({ data }: NutrientCardProps) {
  return (
    <NutrientCardWrapper>
      <ImgWrapper $backgroundColor={data.backgroundColor}>
        <img src={data.logo} alt={`logo-${data.nutrient}`} />
      </ImgWrapper>
      <TextWrapper>
        <h3>
          {data.amount}
          {data.unit}
        </h3>
        <p>{data.nutrient}</p>
      </TextWrapper>
    </NutrientCardWrapper>
  )
}

export default NutrientCard
