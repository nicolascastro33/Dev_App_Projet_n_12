import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
`

export const TextWrapper = styled.div`
  & h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
`

export const AllDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
`

export const AllChartsWrapper = styled.div`
  display: grid;
  gap:20px;
`

export const ChartWrapper = styled.article`
  display:flex;
  height: 263px;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    grid-row: 1;
    grid-column: 1/4;
  }
  &:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
    background-color: ${colors.primary};
  }
  &:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    background-color: ${colors.grey};
  }
  &:nth-child(4) {
    grid-column: 3;
    grid-row: 2;
    background-color: ${colors.backgroundGrey};
  }
`

export const AllNutrientsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 39px;
`
5
