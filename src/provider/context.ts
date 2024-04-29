import { createContext, useContext } from 'react'
import { GlobalStoreType } from '../store/global'
import { type StoreApi, useStore } from 'zustand'

export const StoreContext = createContext<StoreApi<GlobalStoreType> | null>(null)

export const useSportSeeStore = <T>(selector: (store: GlobalStoreType) => T): T => {
  const storeContext = useContext(StoreContext)

  if (!storeContext) {
    throw new Error(`useFlatStore must be use within FlatStoreProvider`)
  }

  return useStore(storeContext, selector)
}

export default StoreContext