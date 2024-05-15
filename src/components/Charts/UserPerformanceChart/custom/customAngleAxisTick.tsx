import { colors } from '../../../../utils/style/colors'

interface CustomAxisTickProps {
  x: number
  y: number
  payload: {
    value: string | number
  }
}

export const CustomAngleAxisTick = ({ x, y, payload }: CustomAxisTickProps) => {
  let newY = y + 5
  let newX = x
  switch (payload?.value) {
    case "Cardio":
      newX = x - 35
      break
    case 'Energie':
      newX = x - 35
      break
    case 'Endurance':
      newY = y + 10
      newX = x - 32
      break
    case 'Intensité':
      newY = y - 5
      newX = x - 20
  }
  return (
    <text fontSize={12} x={newX} y={newY} fill={colors.white}>
      {payload.value}
    </text>
  )
}
