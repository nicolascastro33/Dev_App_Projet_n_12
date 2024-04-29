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
> = (set, get) => ({
  userId: undefined,
  mainData: undefined,
  mainLoading: true,
  mainError: false,

  getMainData: async (id) => {
    set(() => ({ userId: id, mainLoading: true }))
    const data = await SportSeeFetchApi.userMainData(id)
    set(() => ({ mainData: data }))
    if (!get().mainData) {
      set(() => ({ mainError: true }))
    }
    set(() => ({ mainLoading: false }))
  },
})
