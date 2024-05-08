import { colors } from '../../../../utils/style/colors'

interface CustomAxisTickProps {
  x: number
  y: number
  payload: {
    value: string | number
  }
}

export const CustomAngleAxisTick = ({ x, y, payload }: CustomAxisTickProps) => {
  let kind = ''
  let newY = y + 5
  let newX = x
  switch (payload?.value) {
    case 1:
      kind = 'Cardio'
      newX = x - 35
      break
    case 2:
      kind = 'Energie'
      newX = x - 35
      break
    case 3:
      kind = 'Endurance'
      newY = y + 10
      newX = x - 32
      break
    case 4:
      kind = 'Force'
      break
    case 5:
      kind = 'Vitesse'
      break
    case 6:
      kind = 'Intensité'
      newY = y - 5
      newX = x - 20
  }
  return (
    <text fontSize={12} x={newX} y={newY} fill={colors.white}>
      {kind}
    </text>
  )
}
