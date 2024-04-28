import styled from 'styled-components'
import { colors } from '../../../../utils/style/colors'

export interface CustomTooltipProps {
  payload: {
    value: string | number
  }[]
  active?: boolean
}

const CustomTooltipContainer = styled.div`
  background-color: ${colors.primary};
  height: 63px;
  width: 45px;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  & p {
    font-size: 0.5rem;
    text-align: center;
    color: ${colors.white}
  }
`

export const CustomTooltip = ({ payload, active }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipContainer>
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </CustomTooltipContainer>
    )
  }
  return null
}
