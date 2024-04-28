import styled from 'styled-components'
import { colors } from '../../../../utils/style/colors'

const KilogramCircle = styled.span`
  background-color: ${colors.grey};
`
const CaloriesCircle = styled.span`
  background-color: ${colors.primary};
`

const CustomLegendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & h2 {
    font-weight: normal;
    font-size: 1rem;
    color: ${colors.grey};
    margin: 0;
  }
  & .allTextWrapper {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
  }
  & .textWrapper {
    display: flex;
    align-items: center;
  }
  & span {
    display: block;
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 100%;
    }
  & h3 {
    margin: 0;
    font-size: 1rem;
    color: ${colors.lightGrey};
    font-weight: normal;
  }
}
`

interface CustomLegendProps {
  payload: {
    value: string
  }[]
}

export const CustomLegend = ({ payload }: CustomLegendProps) => {
  return (
    <CustomLegendContainer>
      <h2>Activité quotidienne</h2>
      <div className="allTextWrapper">
        {payload.map((entry, index: number) => (
          <div className="textWrapper" key={`wrapper-${index}`}>
            {entry.value === 'kilogram' ? (
              <KilogramCircle key={`round-${index}`} />
            ) : (
              <CaloriesCircle key={`round-${index}`} />
            )}
            <h3 key={`item-${index}`}>
              {entry.value === 'kilogram'
                ? 'Poids (kg)'
                : 'Calories brûlées (kCal)'}
            </h3>
          </div>
        ))}
      </div>
    </CustomLegendContainer>
  )
}
