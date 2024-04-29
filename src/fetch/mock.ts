export const mockedImplementation = {
  mainData: () =>
    Promise.resolve({
      json() {
        return {
          id: 0,
          userInfos: {
            firstName: 'testFirstName',
            lastName: 'testLastName',
            age: 12,
          },
          todayScore: 123,
          keyData: {
            calorieCount: 123,
            proteinCount: 123,
            carbohydrateCount: 123,
            lipidCount: 123,
          },
        }
      },
    }),
  averageSession: () =>
    Promise.resolve({
      json() {
        return {
          userId: 0,
          sessions: [
            {
              day: 123,
              sessionLength: 123,
            },
            {
              day: 123,
              sessionLength: 123,
            },
          ],
        }
      },
    }),
  activity: () =>
    Promise.resolve({
      json() {
        return {
          userId: 0,
          sessions: [
            {
              day: '2021-02-22',
              kilogram: 123,
              calories: 123,
            },
            {
              day: '2018-02-02',
              kilogram: 123,
              calories: 123,
            },
          ],
        }
      },
    }),
  performance: () =>
    Promise.resolve({
      json() {
        return {
          userId: 0,
          kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
          },
          data: [
            {
              value: 123,
              kind: 1,
            },
          ],
        }
      },
    }),
}
