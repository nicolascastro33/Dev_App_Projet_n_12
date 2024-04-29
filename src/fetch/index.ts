import { userMainProps, userActivityProps, userAverageSessionProps, userPerformanceProps } from "../interface"

export type SportSeeApiService = {
  userMainData(userId:number): Promise<userMainProps | undefined>
  userAverageSession(userId: number): Promise<userAverageSessionProps | undefined>
  userActivity(userId: number): Promise<userActivityProps | undefined>
  userPerformance(userId: number): Promise<userPerformanceProps | undefined>
}

export const SportSeeFetchApi : SportSeeApiService = {
    userMainData: async (userId:number) => {
        try {
          const url = import.meta.env.VITE_REACT_API_URL
          const response = await fetch(`${url}/user/:${userId}`)
          return response.json()
        } catch (err) {
          console.error(err)
          throw err
        }
      },
    userAverageSession: async (userId:number) => {
      try {
        const url = import.meta.env.VITE_REACT_API_URL
        const response = await fetch(`${url}/user/:${userId}/average-sessions`)
        return response.json()
      } catch (err) {
        console.error(err)
        throw err
      }
    },
    userActivity: async (userId:number) => {
        try {
          const url = import.meta.env.VITE_REACT_API_URL
          const response = await fetch(`${url}/user/:${userId}/activity`)
          return response.json()
        } catch (err) {
          console.error(err)
          throw err
        }
      },
      userPerformance: async (userId:number) => {
        try {
          const url = import.meta.env.VITE_REACT_API_URL
          const response = await fetch(`${url}/user/:${userId}/performance`)
          return response.json()
        } catch (err) {
          console.error(err)
          throw err
        }
      },
  }