import { StateCreator } from 'zustand'
// import { SportSeeFetchApi } from '../../fetch'
import { SportSeeFetchApi } from '../../mock/fetch'
import { userActivitySessionsProps } from '../../interface'
import { DataModel } from '../../dataModel'

type UserActivityState = {
  activityData: userActivitySessionsProps[] | undefined
  activityLoading: boolean
  activityError: boolean
}
type UserActivityActions = {
  getActivityData: (id: number) => void
}

export type UserActivityStoreType = UserActivityState & UserActivityActions

export const userActivityStore: StateCreator<
  UserActivityStoreType,
  [],
  [],
  UserActivityStoreType
> = (set) => ({
  activityData: undefined,
  activityLoading: true,
  activityError: false,

  getActivityData: async (id) => {
    set(() => ({ activityLoading: true }))
    const response = await SportSeeFetchApi.userActivity(id)
    if (response && typeof response !== 'string' && response?.userId === id ) {
      const dataModel = new DataModel
      const activityData = dataModel.getDailyActivity(response)
      set(() => ({ activityData }))
    } else {
      set(() => ({ activityError: true }))
    }
    set(() => ({ activityLoading: false }))
  },
})
