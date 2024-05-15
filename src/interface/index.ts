export interface userMainProps {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  score?: number
  todayScore?: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}

export interface userKeyData {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}
export interface userActivityProps {
  userId: number
  sessions: {
    day: string
    kilogram: number
    calories: number
  }[]
}

export interface userActivitySessionsProps {
  day: string
  kilogram: number
  calories: number
}

export interface userDataPerformanceProps {
  value: number
  activity: string
}

export interface userPerformanceProps {
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

export interface userAverageSessionProps {
  userId: number
  sessions: {
    day: number
    sessionLength: number
  }[]
}

export interface userSessionProps {
  day: string
  sessionLength: number
}
