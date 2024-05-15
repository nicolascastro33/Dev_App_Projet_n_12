import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from './data'

import { userMainProps,userAverageSessionProps, userActivityProps, userPerformanceProps } from '../interface'



export type SportSeeApiService = {
  userMainData(userId:number): Promise<userMainProps | undefined>
  userAverageSession(userId: number): Promise<userAverageSessionProps | undefined>
  userActivity(userId: number): Promise<userActivityProps | undefined>
  userPerformance(userId: number): Promise<userPerformanceProps | undefined>
}

export const SportSeeFetchApi = {
  userMainData: async (userId: number) => {
    try {
      const response = USER_MAIN_DATA.find((element) => element.id === userId)
      return response
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  userAverageSession: async (userId: number) => {
    try {
      return USER_AVERAGE_SESSIONS.find((element) => element.userId === userId)
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  userActivity: async (userId: number) => {
    try {
      return USER_ACTIVITY.find((element) => element.userId === userId)
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  userPerformance: async (userId: number) => {
    try {
      return USER_PERFORMANCE.find((element) => element.userId === userId)
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}
