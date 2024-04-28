import styled from 'styled-components'
import { colors } from '../../../../utils/style/colors'

const CustomLegendContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  & h3 {
    font-size: 1.6rem;
    margin: 0;
  }
  & p {
    color: ${colors.lightGrey};
    font-size: 0.8rem;
    margin: 0;
    width: 60%;
  }
`

interface CustomLegendProps {
  payload: {
    payload: {
      value: number
    }
  }[]
}

export const CustomLegend = ({ payload }: CustomLegendProps) => {
  const value = payload[0].payload.value
  return (
    <CustomLegendContainer>
      <h3>{value}%</h3>
      <p>de votre objectif</p>
    </CustomLegendContainer>
  )
}
