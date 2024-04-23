//à utiliser dans Nutrients and welcoming part
export const USER_MAIN_DATA = {
  id: 18,
  userInfos: {
    firstName: 'Cecilia',
    lastName: 'Ratorez',
    age: 34,
  },
  score: 0.3,
  keyData: {
    calorieCount: 2500,
    proteinCount: 90,
    carbohydrateCount: 150,
    lipidCount: 120,
  },
}
//à utiliser dans activité quotidienne
export const USER_ACTIVITY = {
  userId: 18,
  sessions: [
    {
      day: '2020-07-01',
      kilogram: 70,
      calories: 240,
    },
    {
      day: '2020-07-02',
      kilogram: 69,
      calories: 220,
    },
    {
      day: '2020-07-03',
      kilogram: 70,
      calories: 280,
    },
    {
      day: '2020-07-04',
      kilogram: 70,
      calories: 500,
    },
    {
      day: '2020-07-05',
      kilogram: 69,
      calories: 160,
    },
    {
      day: '2020-07-06',
      kilogram: 69,
      calories: 162,
    },
    {
      day: '2020-07-07',
      kilogram: 69,
      calories: 390,
    },
  ],
}

// à utiliser dans la durée moyenne des sessions  d'entraînement par semaine
export const USER_AVERAGE_SESSIONS = {
  userId: 18,
  sessions: [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 40,
    },
    {
      day: 3,
      sessionLength: 50,
    },
    {
      day: 4,
      sessionLength: 30,
    },
    {
      day: 5,
      sessionLength: 30,
    },
    {
      day: 6,
      sessionLength: 50,
    },
    {
      day: 7,
      sessionLength: 50,
    },
  ],
}

// à utiliser dans les performances
export const USER_PERFORMANCE = {
  userId: 18,
  data: [
    {
      value: 200,
      kind: 'cardio',
    },
    {
      value: 240,
      kind: 'energy',
    },
    {
      value: 80,
      kind: "endurance",
    },
    {
      value: 80,
      kind: "strenght",
    },
    {
      value: 220,
      kind: "speed",
    },
    {
      value: 110,
      kind: "intensity",
    },
  ],
}
