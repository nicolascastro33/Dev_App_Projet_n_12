import Header from '.'
import { test, expect, describe } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
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

  test('should contain a link to the profile page that send you to the profile page (/profile)', () => {
    render(
      <MemoryRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Page de base</h1>} />
          <Route path="/profile" element={<h1>Nouvelle Page </h1>} />
        </Routes>
      </MemoryRouter>
    )
    const link = screen.getByText('Profil')
    expect(link).toBeDefined()
    fireEvent.click(link)
    expect(screen.getByText('Nouvelle Page')).toBeDefined()
  })

  test('should contain a link to the setting page that send you to the setting page (/setting)', () => {
    render(
      <MemoryRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Page de base</h1>} />
          <Route path="/setting" element={<h1>Nouvelle Page</h1>} />
        </Routes>
      </MemoryRouter>
    )
    const link = screen.getByText('Réglage')
    expect(link).toBeDefined()
    fireEvent.click(link)
    expect(screen.getByText('Nouvelle Page')).toBeDefined()
  })

  test('should contain a link to the community page that send you to the community page (/community)', () => {
    render(
      <MemoryRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Page de base</h1>} />
          <Route path="/community" element={<h1>Nouvelle Page</h1>} />
        </Routes>
      </MemoryRouter>
    )
    const link = screen.getByText('Communauté')
    expect(link).toBeDefined()
    fireEvent.click(link)
    expect(screen.getByText('Nouvelle Page')).toBeDefined()
  })
})
