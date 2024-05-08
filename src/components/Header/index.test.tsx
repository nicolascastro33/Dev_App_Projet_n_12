import Header from '.'
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

describe('Header', () => {
  test('should contain the logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const img = screen.getByRole('img')
    expect(img).toBeDefined()
  })

  test('should contain a link to the welcome page that send you to the welcome page (/)', () => {
    render(
      <MemoryRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Page de base</h1>} />
          <Route path="/profile" element={<h1>Nouvelle Page </h1>} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Page de base')).toBeDefined()
    expect(screen.getByText('Accueil')).toBeDefined()
  })
})
