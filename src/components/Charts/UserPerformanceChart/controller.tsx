import { useSportSeeStore } from '../../../provider/context'
import { useEffect } from 'react'
import RadarChartView from './chart'
import { Loader } from '../../../utils/style/loader'

function UserPerformanceChart() {
  const {
    userId,
    getPerformanceData,
    performanceDataId,
    performanceError,
    performanceLoading,
    performanceData,
  } = useSportSeeStore((state) => state)
  useEffect(() => {
    if ((!performanceData || userId !== performanceDataId) && userId)
      getPerformanceData(userId)
  }, [getPerformanceData, performanceData, performanceDataId, userId])

  if (performanceError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {performanceLoading ? (
        <Loader color="primary"/>
      ) : (
        performanceData && <RadarChartView data={performanceData} />
      )}
    </>
  )
}

export default UserPerformanceChart
