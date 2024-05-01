import { NutrientsCardData } from '.'
import { test, expect, describe } from 'vitest'
import logoProtein from '../../../assets/nutrientsLogos/chicken.png'
import logoEnergy from '../../../assets/nutrientsLogos/energy.png'

describe('Nutrient Card Data', () => {
  test('it should return the correct props for a calories card', () => {
    const expectedValue = {
      unit: 'kCal',
      nutrient: 'Calories',
      logo: logoEnergy,
      backgroundColor: '#FF0000',
      amount: 123,
    }
    const testResult = NutrientsCardData('Calories', 123)
    expect(testResult).toEqual(expectedValue)
  })
  test('it should return the correct props for a calories card', () => {
    const expectedValue = {
      unit: 'g',
      nutrient: 'Protéines',
      logo: logoProtein,
      backgroundColor: '#4AB8FF',
      amount: 123,
    }
    const testResult = NutrientsCardData('Protéines', 123)
    expect(testResult).toEqual(expectedValue)
  })
})
