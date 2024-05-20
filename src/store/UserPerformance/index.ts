import { StateCreator } from 'zustand'
// import { SportSeeFetchApi } from '../../fetch'
import { SportSeeFetchApi } from '../../mock/fetch'
import { userDataPerformanceProps } from '../../interface'
import { DataModel } from '../../dataModel'

type UserPerformanceState = {
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
  performanceData: undefined,
  performanceLoading: true,
  performanceError: false,

  getPerformanceData: async (id) => {
    set(() => ({ performanceLoading: true }))
    const response = await SportSeeFetchApi.userPerformance(id)
    if (response && typeof response !== 'string' && response.userId === id) {
      const dataModel = new DataModel
      const performanceData = dataModel.getPerformance(response)
      set(() => ({ performanceData }))
    } else {
      set(() => ({ performanceError: true }))
    }
    set(() => ({ performanceLoading: false }))
  },
})
