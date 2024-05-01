import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Legend,
} from 'recharts'
import { colors } from '../../../utils/style/colors'
import { CustomLegend } from './custom/customLegend'

interface DataProps {
  score: number
}

function RadialBarChartView({ score }: DataProps) {
  const data = [{ value: score }]
  return (
    <ResponsiveContainer  width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="65%"
        barSize={8}
        data={data}
        startAngle={-270}
        endAngle={90}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          dataKey="value"
          cornerRadius={30}
          fill={colors.primary}
        />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          content={<CustomLegend payload={[]} />}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default RadialBarChartView
