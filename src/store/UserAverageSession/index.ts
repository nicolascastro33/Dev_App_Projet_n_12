import { StateCreator } from 'zustand'
import { SportSeeFetchApi } from '../../fetch'
// import { SportSeeFetchApi } from '../../mock/fetch'
import { userSessionProps } from '../../interface'
import { DataModel } from '../../dataModel'

type UserAverageSessionState = {
  averageData: userSessionProps[] | undefined
  averageLoading: boolean
  averageError: boolean
}
type UserAverageSessionActions = {
  getAverageSessionData: (id: number) => void
}

export type UserAverageSessionStoreType = UserAverageSessionState &
  UserAverageSessionActions

export const userAverageSessionStore: StateCreator<
  UserAverageSessionStoreType,
  [],
  [],
  UserAverageSessionStoreType
> = (set) => ({
  averageData: undefined,
  averageLoading: true,
  averageError: false,

  getAverageSessionData: async (id) => {
    set(() => ({ averageLoading: true }))
    const response = await SportSeeFetchApi.userAverageSession(id)
    if (response && typeof response !== 'string' && response.userId === id) {
      const dataModel = new DataModel
      const averageData = dataModel.getAverageSessions(response)
      set(() => ({ averageData }))
    } else {
      set(() => ({ averageError: true }))
    }
    set(() => ({ averageLoading: false }))
  },
})
