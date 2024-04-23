import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { colors } from '../../../utils/style/colors'
import { CustomAxisTick } from './custom/customAxisTick'
import { CustomTooltip } from './custom/customTooltip'

interface SessionProps {
  sessions:{
      day: number
    sessionLength: number
  }[]
  
}

function UserAverageSessionChart({sessions}: SessionProps) {  
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={sessions}
        margin={{
          top: 5,
          right: 50,
          left: 50,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey={'day'}
          tickLine={false}
          axisLine={false}
          tick={CustomAxisTick}
        />
        <Tooltip
          active={true}
          cursor={{ stroke: 'black', strokeWidth: '20%', strokeOpacity: '30%' }}
          content={<CustomTooltip payload={[]} />}
        />
        <Line type="monotone" dataKey="sessionLength" stroke={colors.white} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default UserAverageSessionChart
