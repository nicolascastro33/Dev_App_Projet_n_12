import NutrientCard from '.'
import logoTest from "../../../assets/nutrientsLogos/energy.png"
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const dataMocks = {
  unit: 'kCal',
  nutrient: 'Calories',
  logo: logoTest,
  backgroundColor: 'white',
  amount: 123,
}

describe('Nutrient Card', () => {
  test('it should render a card including all of the  provided information', () => {
    render(
      <MemoryRouter>
        <NutrientCard data={dataMocks} />
      </MemoryRouter>
    )
    const img = screen.getByRole('img') as HTMLImageElement
    expect(screen.getByText('123kCal')).toBeDefined()
    expect(img).toBeDefined()
    expect(img.src).toContain(
      `${window.location.origin}/src/assets/nutrientsLogos/energy.png`
    )
    expect(screen.getByText('Calories')).toBeDefined()
  })
})
