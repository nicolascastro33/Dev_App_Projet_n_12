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
    case 'cardio':
      kind = 'Cardio'
      newX = x - 45
      break
    case 'energy':
      kind = 'Energie'
      newX = x - 45
      break
    case 'endurance':
      kind = 'Endurance'
      newY = y + 10
      newX = x - 32
      break
    case 'strenght':
      kind = 'Force'
      break
    case 'speed':
      kind = 'Vitesse'
      break
    case 'intensity':
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
