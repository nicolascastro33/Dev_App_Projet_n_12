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
> = (set, get) => ({
  activityData: undefined,
  activityLoading: true,
  activityError: false,

  getActivityData: async (id) => {
    set(() => ({ activityLoading: true }))
    const data = await SportSeeFetchApi.userActivity(id)
    set(() => ({ activityData: data }))
    if (!get().activityData) {
      set(() => ({ activityError: true }))
    }
    set(() => ({ activityLoading: false }))
  },
})
