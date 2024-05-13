import { colors } from '../../../../utils/style/colors'

interface CustomAxisTickProps {
  x?: number
  y?: number
  payload: {
    value: string | number
  }
}


export const CustomAxisTick = ({ x, y, payload }: CustomAxisTickProps) => {
  let day = ''
  let newX = x && x - 5
  switch (payload?.value) {
    case 1:
      day = 'L'
      newX = x
      break
    case 2:
      day = 'M'
      break
    case 3:
      day = 'M'
      break
    case 4:
      day = 'J'
      break
    case 5:
      day = 'V'
      break
    case 6:
      day = 'S'
      break
    case 7:
      day = 'D'
      newX = x && x - 10
  }
  return (
    <text opacity={0.5} fill={colors.white} x={newX} y={y}>
      {day}
    </text>
  )
}
