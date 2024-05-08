import VerticalNav from '.'
import Button from './button'
import testLogo from '../../assets/sportSeeLogo.png'
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('VerticalNav', () => {
  test('should contain 4 buttons', () => {
    render(
      <MemoryRouter>
        <VerticalNav />
      </MemoryRouter>
    )
    const allButtons = screen.getAllByRole('button')
    expect(allButtons.length).toBe(4)
  })
  test('should contain the copyright text', () => {
    render(
      <MemoryRouter>
        <VerticalNav />
      </MemoryRouter>
    )
    const copyright = screen.getByText("Copiryght, SportSee 2020")
    expect(copyright).toBeDefined()
  })
})

describe('Button', () => {
  test('should contain an img with all the good information', () => {
    render(
      <MemoryRouter>
        <Button type="test" logo={testLogo} />
      </MemoryRouter>
    )
    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toBe("http://localhost:3000/src/assets/sportSeeLogo.png")
    expect(img.alt).toBe("bouton de test")
  })
})
