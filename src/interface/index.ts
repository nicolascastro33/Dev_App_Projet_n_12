export interface userMainProps {
  data: {
    id: number
    userInfos: {
      firstName: string
      lastName: string
      age: number
    }
    score: number | undefined
    todayScore: number | undefined
    keyData: {
      calorieCount: number
      proteinCount: number
      carbohydrateCount: number
      lipidCount: number
    }
  }
}

export interface userActivityProps {
  data: {
    userId: number
    sessions: {
      day: string
      kilogram: number
      calories: number
    }[]
  }
}

export interface userDataPerformanceProps {
    value: number
    kind: number
}

export interface userPerformanceProps {
  data: {
    userId: number
    kind: {
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
    }
    data: {
      value: number
      kind: number
    }[]
  }
}

export interface userAverageSessionProps {
  data: {
    userId: number
    sessions: {
      day: number
      sessionLength: number
    }[]
  }
}
