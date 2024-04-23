import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { colors } from '../../../utils/style/colors'

interface DataProps {
  data: {
    value: number
    kind: string
  }[]
}

function UserPerformanceChart({ data }: DataProps) {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3}> 
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid radialLines={false} stroke={colors.white} />
        <PolarAngleAxis tickLine={false} dataKey="kind" stroke={colors.white} />
        <Radar
          name="Value"
          dataKey="value"
          stroke={colors.primary}
          fill={colors.primary}
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default UserPerformanceChart
