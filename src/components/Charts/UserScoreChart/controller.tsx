import { useSportSeeStore } from '../../../provider/context'
import { useEffect } from 'react'
import RadialBarChartView from './chart'
import { Loader } from '../../../utils/style/loader'
import { loaderColor } from '../../../utils/loaderColor'

function UserScoreChart() {
  const { userId, mainData, mainError, mainLoading, getMainData } =
    useSportSeeStore((state) => state)
  useEffect(() => {
    if ((!mainData || userId !== mainData?.id) && userId) getMainData(userId)
  }, [getMainData, mainData, userId])

  if (mainError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {mainLoading ? (
        <Loader color={loaderColor("black")}/>
      ) : (
        mainData && <RadialBarChartView score={mainData?.todayScore} />
      )}
    </>
  )
}

export default UserScoreChart
