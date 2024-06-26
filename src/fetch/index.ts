import {
  userMainProps,
  userActivityProps,
  userAverageSessionProps,
  userPerformanceProps,
} from '../interface'

export type SportSeeApiService = {
  userMainData(userId: number): Promise<userMainProps | undefined>
  userAverageSession(
    userId: number
  ): Promise<userAverageSessionProps | undefined>
  userActivity(userId: number): Promise<userActivityProps | undefined>
  userPerformance(userId: number): Promise<userPerformanceProps | undefined>
}

const url = "http://localhost:3000"

export const SportSeeFetchApi: SportSeeApiService = {
  userMainData: async (userId: number) => {
    try {
      const response = await fetch(`${url}/user/${userId}`)
      const data = await response.json().then((element) => element.data)
      return data
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  userAverageSession: async (userId: number) => {
    try {
      const response = await fetch(`${url}/user/${userId}/average-sessions`)
      const data = await response.json().then((element) => element.data)
      return data
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  userActivity: async (userId: number) => {
    try {
      const response = await fetch(`${url}/user/${userId}/activity`)
      const data = await response.json().then((element) => element.data)
      return data
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  userPerformance: async (userId: number) => {
    try {
      const response = await fetch(`${url}/user/${userId}/performance`)
      const data = await response.json().then((element) => element.data)
      return data
    } catch (err) {
      console.error(err)
      throw err
    }
  },
}
