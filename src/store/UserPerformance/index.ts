import { StateCreator } from 'zustand'
import { SportSeeFetchApi } from '../../fetch'
import { userPerformanceProps } from '../../interface'

type UserPerformanceState = {
  performanceData: userPerformanceProps | undefined
  performanceLoading: boolean
  performanceError: boolean
}
type UserPerformanceActions = {
  getPerformanceData: (id: number) => void
}

export type UserPerformanceStoreType = UserPerformanceState &
  UserPerformanceActions

export const userPerformanceStore: StateCreator<
  UserPerformanceStoreType,
  [],
  [],
  UserPerformanceStoreType
> = (set) => ({
  performanceData: undefined,
  performanceLoading: true,
  performanceError: false,

  getPerformanceData: async (id) => {
    set(() => ({ performanceLoading: true }))
    const data = await SportSeeFetchApi.userPerformance(id)
    if (data && typeof data !== 'string') {
      set(() => ({ performanceData: data }))
    } else {
      set(() => ({ performanceError: true }))
    }
    set(() => ({ performanceLoading: false }))
  },
})
