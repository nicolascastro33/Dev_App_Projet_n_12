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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const NutrientCardWrapper = styled.div`
  width: 258px;
  height: 124px;
  background-color: ${colors.backgroundGrey};
  display: flex;
  padding-left: 32px;
  gap: 32px;
  border-radius: 20px;
  align-items: center;
  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ImgWrapper = styled.div<NutrientStyledProps>`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ $backgroundColor }) => {
      return `background-color: ${$backgroundColor}`
    }};
    opacity: 0.3;
    border-radius: 5px;
  }
`
export const TextWrapper = styled.div`
display:flex;
flex-direction: column;
gap: 5px;
& h3{
    margin: 0;
}
& p{
    color:${colors.lightGrey};
    margin: 0;
    font-weight: 500;
    font-size: 0.8rem;
}
`
