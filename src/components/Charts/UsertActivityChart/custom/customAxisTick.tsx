import { colors } from '../../../../utils/style/colors'

interface CustomAxisTickProps {
  x?: number
  y?: number
  payload: {
    value: string | number
    index: number
  }
}

export const CustomXaxisTick = ({ x, y, payload }: CustomAxisTickProps) => {  
  return (
    <text fill={colors.lightGrey} x={x} y={y && y + 20}>
      {payload.index + 1}
    </text>
  )
}


export const CustomYaxisTick = ({ x, y, payload }: CustomAxisTickProps) => {
  return (
    <text fill={colors.lightGrey} x={x} y={y}>
      {payload.value}
    </text>
  )
}
