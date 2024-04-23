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

function UserScoreChart({ score }: DataProps) {
  const data = [{ value: score * 100 }]
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="100%"
        barSize={25}
        data={data}
        startAngle={90}
        endAngle={-270}
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
          iconSize={5}
          layout="vertical"
          verticalAlign="middle"
          content={<CustomLegend payload={[]} />}
        />
        <Legend iconSize={10} />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default UserScoreChart
