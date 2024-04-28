import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { colors } from '../../../utils/style/colors'
import { CustomLegend } from './custom/customLegend'
import { CustomTooltip } from './custom/customTooltip'
import { CustomYaxisTick, CustomXaxisTick } from './custom/customAxisTick'

interface SessionsProps {
  sessions: {
    day: string
    kilogram: number
    calories: number
  }[]
}

function UserActivityChart({ sessions }: SessionsProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={sessions}
        margin={{
          top: 24,
          right: 43,
          left: 43,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
        tick={CustomXaxisTick}
          dataKey={'day'}
          tickLine={false}
          axisLine={true}
          scale={'auto'}
        />
        <YAxis
          tick={CustomYaxisTick}
          type="number"
          domain={[0, 'dataMax + 200']}
          tickLine={false}
          axisLine={false}
          orientation="right"
          tickCount={3}
          tickMargin={20}
          interval={0}
        />
        <Tooltip active={true} content={<CustomTooltip payload={[]} />} />
        <Legend
          verticalAlign="top"
          height={50}
          content={<CustomLegend payload={[]} />}
        />
        <Bar dataKey="kilogram" barSize={7} fill={colors.grey}  radius={[10, 10, 0, 0]}/>
        <Bar dataKey="calories" fill={colors.primary} barSize={7} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default UserActivityChart
