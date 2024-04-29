import { type ReactNode, useRef } from 'react'
import { GlobalStoreType } from '../store/global'
import { type StoreApi } from 'zustand'
import StoreContext from './context'
import { globalStore } from '../store/global'

export interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({
  children,
}: StoreProviderProps) => {
  const storeRef = useRef<StoreApi<GlobalStoreType>>()
  if (!storeRef.current) {
    storeRef.current = globalStore
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}