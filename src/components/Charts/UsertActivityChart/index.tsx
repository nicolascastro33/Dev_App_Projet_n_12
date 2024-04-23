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

function UsertActivityChart({ sessions }: SessionsProps) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={sessions}
        margin={{
          top: 50,
          right: 30,
          left: 20,
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
          domain={[0, 'dataMax + 100']}
          tickLine={false}
          axisLine={false}
          orientation="right"
          tickCount={3}
          tickMargin={45}
          interval={0}
        />
        <Tooltip active={true} content={<CustomTooltip payload={[]} />} />
        <Legend
          verticalAlign="top"
          height={64.5}
          content={<CustomLegend payload={[]} />}
        />
        <Bar dataKey="kilogram" barSize={7} fill={colors.grey}  radius={[10, 10, 0, 0]}/>
        <Bar dataKey="calories" fill={colors.primary} barSize={7} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default UsertActivityChart
