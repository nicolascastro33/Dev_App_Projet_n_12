import { StateCreator } from 'zustand'
// import { SportSeeFetchApi } from '../../fetch'
import { SportSeeFetchApi } from '../../mock/fetch'
import { userKeyData } from '../../interface'
import { DataModel } from '../../dataModel'

type UserMainState = {
  userId: number | undefined
  scoreUser: number|undefined
  keyData: userKeyData|undefined 
  firstName: string|undefined
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
  scoreUser: undefined,
  keyData: undefined, 
  firstName: undefined,
  mainLoading: true,
  mainError: false,

  getMainData: async (id) => {
    set(() => ({ userId: id, mainLoading: true }))
    const response = await SportSeeFetchApi.userMainData(id)
    if (response && typeof response !== "string") {
      const dataModel = new DataModel 
      const firstName = dataModel.getFirstName(response)
      const scoreUser = dataModel.getTodayScore(response)
      const keyData = response && dataModel.getKeyData(response)
      set(() => ({ firstName, scoreUser, keyData  }))
    } else {
      set(() => ({ mainError: true }))
    }
    set(() => ({ mainLoading: false }))
  },
})
