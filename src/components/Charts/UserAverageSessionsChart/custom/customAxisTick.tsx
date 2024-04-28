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
  switch (payload?.value) {
    case 1:
      day = 'L'
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
  }
  return (
    <text  fill={colors.white} x={x && x - 5} y={y}>
      {day}
    </text>
  )
}
