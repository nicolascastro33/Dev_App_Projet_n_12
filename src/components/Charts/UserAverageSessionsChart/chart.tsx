import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts'
import { colors } from '../../../utils/style/colors'
import { CustomAxisTick } from './custom/customAxisTick'
import { CustomTooltip } from './custom/customTooltip'
import { CustomCursor } from './custom/customCursor'

interface SessionProps {
  sessions: {
    day: string
    sessionLength: number
  }[]
}

function LineChartView({ sessions }: SessionProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={400}
        data={sessions}
      >
        <XAxis
          dataKey={'day'}
          tickLine={false}
          axisLine={false}
          tick={CustomAxisTick}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          hide={true}
          padding={{ bottom:30, top: 80 }}
          type="number"
          domain={[0, 'dataMax + 10']}
        />

        <Tooltip
          active={true}
          cursor={<CustomCursor points={[]} height={400} width={500} />}
          content={<CustomTooltip payload={[]} />}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke={colors.white}
          opacity={0.8}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartView
