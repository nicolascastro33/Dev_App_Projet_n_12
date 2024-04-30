import { useSportSeeStore } from '../../../provider/context'
import { useEffect } from 'react'
import BarChartView from './chart'
import { Loader } from '../../../utils/style/loader'
import { loaderColor } from '../../../utils/loaderColor'

function UserActivityChart() {
  const {
    userId,
    getActivityData,
    activityError,
    activityLoading,
    activityData,
  } = useSportSeeStore((state) => state)
  useEffect(() => {
    if ((!activityData || userId !== activityData?.userId) && userId)
      getActivityData(userId)
  }, [activityData, getActivityData, userId])

  if (activityError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {activityLoading ? (
        <Loader color={loaderColor('black')} />
      ) : (
        activityData && <BarChartView sessions={activityData?.sessions} />
      )}
    </>
  )
}

export default UserActivityChart
