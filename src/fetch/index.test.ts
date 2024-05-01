import { describe, test, expect, vi, beforeEach } from 'vitest'
import { SportSeeFetchApi } from '.'

const succeedData = {
  userId: '123',
  content: 'test__succeed__test',
}
const failedData = "test__failed__test"

describe('FetchData: ', () => {

  describe('When I want to get the main user data,', () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(succeedData),
      })
    )
    beforeEach(() => {
      fetch.mockClear();
    })
    
    test('it should return the mocked data, when the fetch has succeed', async () => {
      const mainData = await SportSeeFetchApi.userMainData(0)
      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/user/0')
      expect(mainData).toStrictEqual(succeedData)
    })
    test('it should return an error, when the fetch has failed', async () => {
      fetch.mockImplementationOnce(() => Promise.reject(failedData));
      const mainData = await SportSeeFetchApi.userMainData(0)
      expect(mainData).toEqual(null);
      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/user/0')
    })
  })
})







// describe('fetchData', () => {
//   let originalFetch: unknown
//   beforeAll(() => {
//     originalFetch = global.fetch
//   })

//   afterAll(() => {
//     global.fetch = originalFetch
//   })
//   describe('Main Data Fetch: ', () => {
//     test('it should return the mocked data', async () => {
//       global.fetch = vi.fn(mockedImplementation.mainData)
//       const fetch = await SportSeeFetchApi.userMainData(0)
//       const data = fetch?.data

//       expect(data?.todayScore).toEqual(123)
//       expect(data?.id).not.toEqual(1)
//     })
//   })

//   describe('Average Session Data Fetch: ', () => {
//     test('it should return the mocked data', async () => {
//       global.fetch = vi.fn(mockedImplementation.averageSession)
//       const fetch = await SportSeeFetchApi.userAverageSession(0)
//       const data = fetch?.data
//       expect(data?.sessions[0].sessionLength).toEqual(123)
//       expect(data?.userId).not.toEqual(1)
//     })
//   })

//   describe('Activity Data Fetch: ', () => {
//     test('it should return the mocked data', async () => {
//       global.fetch = vi.fn(mockedImplementation.activity)
//       const fetch = await SportSeeFetchApi.userActivity(0)
//       const data = fetch?.data
//       expect(data?.sessions[0].kilogram).toEqual(123)
//       expect(data?.userId).not.toEqual(1)
//     })
//   })

//   describe('Performance Data Fetch: ', () => {
//     test('it should return the mocked data', async () => {
//       global.fetch = vi.fn(mockedImplementation.performance)
//       const fetch = await SportSeeFetchApi.userPerformance(0)
//       const data = fetch?.data
//       expect(data?.data[0].value).toEqual(123)
//       expect(data?.userId).not.toEqual(1)
//     })
//   })
// })
