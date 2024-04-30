import NutrientCard from './card'
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Nutrient Card', () => {
  test('it should render a calories card, if the type is Calories', () => {
    render(
      <MemoryRouter>
        <NutrientCard nutrient="Calories" amount={100} />
      </MemoryRouter>
    )
    const img = screen.getByRole('img') as HTMLImageElement
    expect(screen.getByText('100kCal')).toBeDefined()
    expect(img).toBeDefined()
    expect(img.src).toContain(
      `${window.location.origin}/src/assets/nutrientsLogos/energy.png`
    )
    expect(screen.getByText('Calories')).toBeDefined()
  })
  test('it should render a protein card, if the type is Protéines', () => {
    render(
      <MemoryRouter>
        <NutrientCard nutrient="Protéines" amount={100} />
      </MemoryRouter>
    )
    const img = screen.getByRole('img') as HTMLImageElement

    expect(screen.getByText('100g')).toBeDefined()
    expect(img).toBeDefined()
    expect(img.src).toContain(
      `${window.location.origin}/src/assets/nutrientsLogos/chicken.png`
    )
    expect(screen.getByText('Protéines')).toBeDefined()
  })
  test('it should render a carbohydrates card, if the type is Glucides', () => {
    render(
      <MemoryRouter>
        <NutrientCard nutrient="Glucides" amount={100} />
      </MemoryRouter>
    )

    const img = screen.getByRole('img') as HTMLImageElement
    expect(screen.getByText('100g')).toBeDefined()
    expect(img).toBeDefined()
    expect(img.src).toContain(
      `${window.location.origin}/src/assets/nutrientsLogos/apple.png`
    )
    expect(screen.getByText('Glucides')).toBeDefined()
  })
  test('it should render a fat card, if the type is Lipides', () => {
    render(
      <MemoryRouter>
        <NutrientCard nutrient="Lipides" amount={100} />
      </MemoryRouter>
    )
    const img = screen.getByRole('img') as HTMLImageElement
    expect(screen.getByText('100g')).toBeDefined()
    expect(img).toBeDefined()
    expect(img.src).toContain(
      `${window.location.origin}/src/assets/nutrientsLogos/cheeseburger.png`
    )
    expect(screen.getByText('Lipides')).toBeDefined()
  })
})
