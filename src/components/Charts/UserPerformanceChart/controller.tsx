import { useSportSeeStore } from '../../../provider/context'
import { useEffect } from 'react'
import RadarChartView from './chart'
import { Loader } from '../../../utils/style/loader'
import { loaderColor } from '../../../utils/loaderColor'

function UserPerformanceChart() {
  const {
    userId,
    getPerformanceData,
    performanceError,
    performanceLoading,
    performanceData,
  } = useSportSeeStore((state) => state)
  useEffect(() => {
    if ((!performanceData || userId !== performanceData?.userId) && userId)
      getPerformanceData(userId)
  }, [getPerformanceData, performanceData, userId])

  if (performanceError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {performanceLoading ? (
        <Loader color={loaderColor("white")}/>
      ) : (
        performanceData && <RadarChartView data={performanceData?.data} />
      )}
    </>
  )
}

export default UserPerformanceChart
