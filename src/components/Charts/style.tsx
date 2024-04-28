import styled from "styled-components"
import { colors } from "../../utils/style/colors"

export const ChartsWrapper = styled.div`
  display: grid;
  gap: 28px;
`

export const ChartWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  &:nth-child(1) {
    grid-row: 1;
    grid-column: 1/4;
    background-color: ${colors.backgroundGrey};
    height: 320px;
  }
  &:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
    background-color: ${colors.primary};
    height: 263px;
    position: relative;
    & h2 {
      position: absolute;
      top: 29px;
      left: 34px;
      font-weight: 500;
      font-size: 0.9rem;
      margin: 0;
      opacity: 0.5;
      width: 70%;
      color:${colors.white};
    }
  }
  &:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    background-color: ${colors.grey};
    height: 263px;
  }
  &:nth-child(4) {
    position: relative;
    grid-column: 3;
    grid-row: 2;
    background-color: ${colors.backgroundGrey};
    height: 263px;
    & h2 {
      position: absolute;
      top: 24px;
      left: 30px;
      font-weight: 500;
      font-size: 0.9rem;
      margin: 0;
    }
  }
`