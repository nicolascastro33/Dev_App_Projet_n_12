import { StateCreator } from 'zustand'
import { SportSeeFetchApi } from '../../fetch'
import { userAverageSessionProps } from '../../interface'

type UserAverageSessionState = {
  averageSessionData: userAverageSessionProps | undefined
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
  averageSessionData: undefined,
  averageLoading: true,
  averageError: false,

  getAverageSessionData: async (id) => {
    set(() => ({ averageLoading: true }))
    const data = await SportSeeFetchApi.userAverageSession(id)
    set(() => ({ averageSessionData: data }))
    if (!get().averageSessionData) {
      set(() => ({ averageError: true }))
    }
    set(() => ({ averageLoading: false }))
  },
})
