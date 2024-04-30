import { useSportSeeStore } from '../../../provider/context'
import { useEffect } from 'react'
import LineChartView from './chart'
import { Loader } from '../../../utils/style/loader'
import { loaderColor } from '../../../utils/loaderColor'

function UserAverageSessionChart() {
  const {
    userId,
    getAverageSessionData,
    averageError,
    averageLoading,
    averageData,
  } = useSportSeeStore((state) => state)
  useEffect(() => {
    if ((!averageData || userId !== averageData?.userId) && userId) getAverageSessionData(userId)
  }, [getAverageSessionData, averageData, userId])

  if (averageError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {averageLoading ? (
        <Loader color={loaderColor("white")}/>
      ) : (
        averageData && <LineChartView sessions={averageData?.sessions} />
      )}
    </>
  )
}

export default UserAverageSessionChart
