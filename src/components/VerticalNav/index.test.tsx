import VerticalNav from '.'
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

})