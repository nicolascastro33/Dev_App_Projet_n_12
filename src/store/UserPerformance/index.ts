import { StateCreator } from 'zustand'
import { SportSeeFetchApi } from '../../fetch'
import { userDataPerformanceProps } from '../../interface'

type UserPerformanceState = {
  performanceDataId: number|undefined
  performanceData: userDataPerformanceProps[] | undefined
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
  performanceDataId: undefined,
  performanceData: undefined,
  performanceLoading: true,
  performanceError: false,

  getPerformanceData: async (id) => {
    set(() => ({ performanceLoading: true }))
    const fetch = await SportSeeFetchApi.userPerformance(id)
    if (fetch && typeof fetch !== 'string') {
      const data = [...fetch.data.data.reverse()]
      set(() => ({ performanceData: data }))
      set(() => ({ performanceDataId: id }))
    } else {
      set(() => ({ performanceError: true }))
    }
    set(() => ({ performanceLoading: false }))
  },
})
