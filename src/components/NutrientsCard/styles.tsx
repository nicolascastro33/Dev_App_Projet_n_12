import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

interface NutrientStyledProps {
  readonly $backgroundColor?: string
}

export const AllNutrientsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 39px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`

export const NutrientCardWrapper = styled.div`
  width: 258px;
  height: 124px;
  background-color: ${colors.backgroundGrey};
  display: flex;
  justify-content:space-evenly;
  border-radius: 20px;
  align-items: center;
`

export const ImgWrapper = styled.div<NutrientStyledProps>`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  position:relative;
  align-items: center;
  &::before {    
    content:"";
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    ${({ $backgroundColor }) => {
      return `background-color: ${$backgroundColor}`
    }};
    opacity: 0.3;
    border-radius:20px;

  }
`
export const TextWrapper = styled.div`
display:flex;
flex-direction: column;
& h3{
    margin: 0;
}
& p{
    color:${colors.lightGrey}
    margin: 0;
}
`
