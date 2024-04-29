import { createStore } from 'zustand'
import { userMainStore, UserMainStoreType } from './UserMain'
import { userPerformanceStore, UserPerformanceStoreType } from './UserPerformance'
import { userActivityStore, UserActivityStoreType } from './UserActivity'
import { userAverageSessionStore, UserAverageSessionStoreType } from './UserAverageSession'

export type GlobalStoreType = UserMainStoreType & UserPerformanceStoreType & UserActivityStoreType & UserAverageSessionStoreType

export const globalStore = createStore<GlobalStoreType>()((set, get, store) => ({
  ...userMainStore(set, get, store),
  ...userPerformanceStore(set, get, store),
  ...userActivityStore(set, get, store),
  ...userAverageSessionStore(set, get, store),
}))
