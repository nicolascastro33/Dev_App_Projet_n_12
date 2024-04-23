import styled from 'styled-components'
import { colors } from '../../../../utils/style/colors'

export interface CustomTooltipProps {
  payload: {
    value: string | number
  }[]
  active?: boolean
}

const CustomTooltipContainer = styled.div`
  background-color: ${colors.white};
  height: 25px;
  width: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    font-size: 0.6rem;
    text-align: center;
  }
`

export const CustomTooltip = ({ payload, active }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipContainer>
        <p className="label">{`${payload[0].value} min`}</p>
      </CustomTooltipContainer>
    )
  }
  return null
}
