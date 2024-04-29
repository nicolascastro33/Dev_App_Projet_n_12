import { describe, test, expect, vi, beforeAll, afterAll } from 'vitest'
import { SportSeeFetchApi } from '.'
import { mockedImplementation } from './mock'

describe('fetchData', () => {
  let originalFetch: unknown
  beforeAll(() => {
    originalFetch = global.fetch
  })

  afterAll(() => {
    global.fetch = originalFetch
  })
  describe('Main Data Fetch: ', () => {
    test('it should return the mocked data', async () => {
      global.fetch = vi.fn(mockedImplementation.mainData)
      const data = await SportSeeFetchApi.userMainData(0)
      expect(data?.todayScore).toEqual(123)
      expect(data?.id).not.toEqual(1)
    })
  })

  describe('Average Session Data Fetch: ', () => {
    test('it should return the mocked data', async () => {
      global.fetch = vi.fn(mockedImplementation.averageSession)
      const data = await SportSeeFetchApi.userAverageSession(0)
      expect(data?.sessions[0].sessionLength).toEqual(123)
      expect(data?.userId).not.toEqual(1)
    })
  })

  describe('Activity Data Fetch: ', () => {
    test('it should return the mocked data', async () => {
      global.fetch = vi.fn(mockedImplementation.activity)
      const data = await SportSeeFetchApi.userActivity(0)
      expect(data?.sessions[0].kilogram).toEqual(123)
      expect(data?.userId).not.toEqual(1)
    })
  })

  describe('Performance Data Fetch: ', () => {
    test('it should return the mocked data', async () => {
      global.fetch = vi.fn(mockedImplementation.performance)
      const data = await SportSeeFetchApi.userPerformance(0)
      expect(data?.data[0].value).toEqual(123)
      expect(data?.userId).not.toEqual(1)
    })
  })
})
