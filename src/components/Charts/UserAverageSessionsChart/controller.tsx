import { useSportSeeStore } from '../../../provider/context'
import { useEffect } from 'react'
import LineChartView from './chart'
import { Loader } from '../../../utils/style/loader'

function UserAverageSessionChart() {
  const {
    userId,
    getAverageSessionData,
    averageError,
    averageLoading,
    averageData,
  } = useSportSeeStore((state) => state)
  useEffect(() => {
    if ((!averageData || userId !== averageData?.data.userId) && userId) getAverageSessionData(userId)
  }, [getAverageSessionData, averageData, userId])

  if (averageError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {averageLoading ? (
        <Loader color="white"/>
      ) : (
        averageData && <LineChartView sessions={averageData?.data.sessions} />
      )}
    </>
  )
}

export default UserAverageSessionChart
