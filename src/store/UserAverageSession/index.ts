import { StateCreator } from 'zustand'
import { SportSeeFetchApi } from '../../fetch'
import { userAverageSessionProps } from '../../interface'

type UserAverageSessionState = {
  averageData: userAverageSessionProps | undefined
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
> = (set, get) => ({
  averageData: undefined,
  averageLoading: true,
  averageError: false,

  getAverageSessionData: async (id) => {
    set(() => ({ averageLoading: true }))
    const data = await SportSeeFetchApi.userAverageSession(id)
    set(() => ({ averageData: data }))
    if (!get().averageData) {
      set(() => ({ averageError: true }))
    }
    set(() => ({ averageLoading: false }))
  },
})
