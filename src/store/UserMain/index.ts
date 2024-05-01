import { StateCreator } from 'zustand'
import { SportSeeFetchApi } from '../../fetch'
import { userMainProps } from '../../interface'

type UserMainState = {
  userId: number | undefined
  mainData: userMainProps | undefined 
  mainLoading: boolean
  mainError: boolean
}
type UserMainActions = {
  getMainData: (id: number) => void
}

export type UserMainStoreType = UserMainState & UserMainActions

export const userMainStore: StateCreator<
  UserMainStoreType,
  [],
  [],
  UserMainStoreType
> = (set) => ({
  userId: undefined,
  mainData: undefined,
  mainLoading: true,
  mainError: false,

  getMainData: async (id) => {
    set(() => ({ userId: id, mainLoading: true }))
    const data = await SportSeeFetchApi.userMainData(id)
    if (data && typeof data !== "string") {
      if(!data.data.score)data.data.score = data.data.todayScore
      set(() => ({ mainData: data }))
    } else {
      set(() => ({ mainError: true }))
    }
    set(() => ({ mainLoading: false }))
  },
})
