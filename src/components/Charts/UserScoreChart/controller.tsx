import { useSportSeeStore } from '../../../provider/context'
import RadialBarChartView from './chart'
import { Loader } from '../../../utils/style/loader'

function UserScoreChart() {
  const { scoreUser, mainError, mainLoading } =
    useSportSeeStore((state) => state)

  if (mainError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {mainLoading ? (
        <Loader color="primary" />
      ) : (
        scoreUser && <RadialBarChartView score={scoreUser * 100} />
      )}
    </>
  )
}

export default UserScoreChart
