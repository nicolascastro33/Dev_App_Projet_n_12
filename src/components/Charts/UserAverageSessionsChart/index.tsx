import { LineChart, Line, XAxis, Tooltip } from 'recharts'
import { USER_AVERAGE_SESSIONS } from '../../../data/data'
import { colors } from '../../../utils/style/colors'
import { Container } from './style'
import { CustomAxisTick } from './custom/customAxisTick'
import { CustomTooltip } from './custom/customTooltip'

// const CursorWrapper = styled.div`
//   height: 100px;
//   width: 100px; 
//   background-color: blue;
// `

// const CustomCursor = ({active, x, y}:any) => {
//   if(active){
//     console.log("yes")
//     return(
//       <CustomCursor></CustomCursor>
//     )
//   }
//   return null
// }

function UserAverageSessionChart() {
  return (
    <Container>
      <LineChart
        width={500}
        height={300}
        data={USER_AVERAGE_SESSIONS[0].sessions}
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
          cursor={{ stroke: 'black', strokeWidth: '20%', strokeOpacity: '30%'}}
          content={<CustomTooltip payload={[]} />}
        />
        <Line type="monotone" dataKey="sessionLength" stroke={colors.white} />
      </LineChart>
    </Container>
  )
}

export default UserAverageSessionChart
