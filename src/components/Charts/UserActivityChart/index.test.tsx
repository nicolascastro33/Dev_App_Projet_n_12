import UserActivityChart from '.'
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const testData = [
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
]

describe('UserActivityChart', () => {

  test('it should render the userActivityChart', () => {
    render(
      <MemoryRouter>
        <UserActivityChart sessions={testData} />
      </MemoryRouter>
    )
    expect(screen.getByText('Activité quotidienne')).toBeDefined()
    expect(screen.getByText('Calories brûlées (Kcal)')).toBeDefined()
  })
})
