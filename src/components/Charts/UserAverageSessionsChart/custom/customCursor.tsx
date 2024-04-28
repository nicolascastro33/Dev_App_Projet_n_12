import { Rectangle } from 'recharts'

export interface CustomCursorProps {
  points: {
    x: number
    y: number
  }[]
  width: number
  height: number
}

export const CustomCursor = ({ points, width, height }: CustomCursorProps) => {
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="black"
      stroke="black"
      opacity="30%"
      x={x}
      y={y-10}
      width={width}
      height={height}
    />
  )
}
