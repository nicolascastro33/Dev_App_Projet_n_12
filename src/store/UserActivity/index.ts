import { StateCreator } from 'zustand'
import { SportSeeFetchApi } from '../../fetch'
import { userActivityProps } from '../../interface'

type UserActivityState = {
  activityData: userActivityProps | undefined
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
    const data = await SportSeeFetchApi.userActivity(id)
    if (data && typeof data !== 'string') {
      set(() => ({ activityData: data }))
    } else {
      set(() => ({ activityError: true }))
    }
    set(() => ({ activityLoading: false }))
  },
})
