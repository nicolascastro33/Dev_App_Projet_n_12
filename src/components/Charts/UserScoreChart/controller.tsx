import { useSportSeeStore } from '../../../provider/context'
import { useEffect } from 'react'
import RadialBarChartView from './chart'
import { Loader } from '../../../utils/style/loader'

function UserScoreChart() {
  const { userId, mainData, mainError, mainLoading, getMainData } =
    useSportSeeStore((state) => state)
  const score = mainData?.data.score
  useEffect(() => {
    if ((!mainData || userId !== mainData?.data.id) && userId)
      getMainData(userId)
  }, [getMainData, mainData, userId])

  if (mainError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {mainLoading ? (
        <Loader color="primary" />
      ) : (
        score && <RadialBarChartView score={score * 100} />
      )}
    </>
  )
}

export default UserScoreChart
