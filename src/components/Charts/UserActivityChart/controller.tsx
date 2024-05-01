import { useSportSeeStore } from '../../../provider/context'
import { useEffect } from 'react'
import BarChartView from './chart'
import { Loader } from '../../../utils/style/loader'

function UserActivityChart() {
  const {
    userId,
    getActivityData,
    activityError,
    activityLoading,
    activityData,
  } = useSportSeeStore((state) => state)
  useEffect(() => {
    if ((!activityData || userId !== activityData?.data.userId) && userId)
      getActivityData(userId)
  }, [activityData, getActivityData, userId])

  if (activityError) {
    return <p>There was an error getting the data for this chart</p>
  }

  return (
    <>
      {activityLoading ? (
        <Loader color="primary" />
      ) : (
        activityData && <BarChartView sessions={activityData?.data.sessions} />
      )}
    </>
  )
}

export default UserActivityChart
