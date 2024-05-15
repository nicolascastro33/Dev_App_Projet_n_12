import {
  userMainProps,
  userActivityProps,
  userAverageSessionProps,
  userPerformanceProps,
} from '../interface/index'

export class DataModel {
  get defaultAverageSessions() {
    return [
      {
        day: 'L',
        sessionLength: 0,
      },
      {
        day: 'M',
        sessionLength: 0,
      },
      {
        day: 'M',
        sessionLength: 0,
      },
      {
        day: 'J',
        sessionLength: 0,
      },
      {
        day: 'V',
        sessionLength: 0,
      },
      {
        day: 'S',
        sessionLength: 0,
      },
      {
        day: 'D',
        sessionLength: 0,
      },
    ]
  }

  get defaultKeyData() {
    return {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    }
  }

  getPerformance(data: userPerformanceProps) {
    const activities = [
      {
        value: 0,
        activity: 'Intensité',
      },
      {
        value: 0,
        activity: 'Vitesse',
      },
      {
        value: 0,
        activity: 'Force',
      },
      {
        value: 0,
        activity: 'Endurance',
      },
      {
        value: 0,
        activity: 'Energie',
      },
      {
        value: 0,
        activity: 'Cardio',
      },
    ]
    if (data) {
      for (const item of data.data) {
        const kindIndex:keyof typeof data.kind  = item.kind as 1 | 2 | 3 | 4 | 5 | 6
        const nameActivity = changeNameKind(data.kind[kindIndex])
        const activity = activities.find(
          (element) => element.activity === nameActivity
        )
        if(activity) activity.value = item.value
      }
    }
    return activities
  }

  getAverageSessions(data: userAverageSessionProps) {
    const averageSessions = [
      {
        day: 'L',
        sessionLength: 0,
      },
      {
        day: 'M',
        sessionLength: 0,
      },
      {
        day: 'M',
        sessionLength: 0,
      },
      {
        day: 'J',
        sessionLength: 0,
      },
      {
        day: 'V',
        sessionLength: 0,
      },
      {
        day: 'S',
        sessionLength: 0,
      },
      {
        day: 'D',
        sessionLength: 0,
      },
    ]
    if (data) {
      for (const index in data.sessions) {
        averageSessions[index].sessionLength =
          data.sessions[index].sessionLength
      }
    }
    return averageSessions
  }

  getDailyActivity(data: userActivityProps) {
    const dailyActivity = []
    if (data) {
      for (const session of data.sessions) {
        const [yyyy, mm, dd] = session.day.split('-')

        dailyActivity.push({
          day: `${dd}/${mm}/${yyyy}`,
          kilogram: session.kilogram,
          calories: session.calories,
        })
      }
      return dailyActivity
    }

    return undefined
  }

  getFirstName(data: userMainProps) {
    if (data.userInfos.firstName) return data.userInfos.firstName
    return 'Unknown User'
  }

  getKeyData(data: userMainProps) {
    if (data.keyData) return data.keyData
    return this.defaultKeyData
  }

  getTodayScore(data: userMainProps) {
    if (data.todayScore) {
      return data.todayScore
    } else if (data.score) {
      return data.score
    }
    return 0
  }
}

export const changeNameKind = (oldKind: string) => {
  switch (oldKind) {
    case 'cardio':
      return 'Cardio'
    case 'energy':
      return 'Energie'
    case 'endurance':
      return 'Endurance'
    case 'strength':
      return 'Force'
    case 'speed':
      return 'Vitesse'
    case 'intensity':
      return 'Intensité'
  }
}
