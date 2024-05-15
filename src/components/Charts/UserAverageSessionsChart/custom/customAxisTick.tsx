import { colors } from '../../../../utils/style/colors'

interface CustomAxisTickProps {
  x?: number
  y?: number
  payload: {
    value: string | number
  }
}


export const CustomAxisTick = ({ x, y, payload }: CustomAxisTickProps) => {
  let newX = x && x - 5
  switch (payload?.value) {
    case "L":
      newX = x
      break
    case "D":
      newX = x && x - 10
  }
  return (
    <text opacity={0.5} fill={colors.white} x={newX} y={y}>
      {payload.value}
    </text>
  )
}
