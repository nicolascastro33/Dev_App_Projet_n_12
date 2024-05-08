import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis
} from 'recharts'
import { colors } from '../../../utils/style/colors'
import { CustomAngleAxisTick } from './custom/customAngleAxisTick'

interface DataProps {
  data: {
    value: number
    kind: number
  }[]
}

function RadarChartView({ data }: DataProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
        margin={{
          top: 20,
          left: 30,
          right: 30,
          bottom: 20,
        }}
      >
        <PolarGrid radialLines={false} stroke={colors.white}/>
        <PolarRadiusAxis domain={[0, "dataMax + 20"]} display={"none"}/>
        <PolarAngleAxis
          tickLine={false}
          dataKey="kind"
          type="category"
          tick={
            <CustomAngleAxisTick
              payload={{
                value: '',
              }} x={0} y={0}            />
          }
          stroke={colors.white}
        />
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

export default RadarChartView
