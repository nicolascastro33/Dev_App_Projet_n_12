import { describe, expect, vi, beforeEach } from 'vitest'
import { SportSeeFetchApi } from '.'
import createFetchMock from 'vitest-fetch-mock'
import 'vitest-fetch-mock'

const fetch = createFetchMock(vi)
fetch.enableMocks()

const succeedData = {
  userId: '123',
  content: 'test__succeed__test',
}
const failedData = 'test__failed__test'

describe('FetchData:', () => {
  beforeEach(() => {
      fetch.resetMocks()
    })
  describe('Main Data Fetch: ', () => {
    it('should return the mocked data, when the fetch has succeed', async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: succeedData }))
      //assert on the response
      const res = await SportSeeFetchApi.userMainData(4)
      expect(res?.data).toEqual(succeedData)

      //assert on the times called and arguments given to fetch
      expect(fetch.requests().length).toEqual(1)
      expect(fetch.requests()[0].url).toEqual('http://localhost:3000/user/4')
    })
    it('should return an error, when the fetch has failed', async () => {
      fetch.mockReject(new Error(failedData))
      expect(fetch('http://localhost:3000/user/4')).rejects.toThrow(failedData);
    })
  })

  describe('Average Session Data Fetch: ', () => {
    it('should return the mocked data, when the fetch has succeed', async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: succeedData }))
      //assert on the response
      const res = await SportSeeFetchApi.userAverageSession(4)
      expect(res?.data).toEqual(succeedData)

      //assert on the times called and arguments given to fetch
      expect(fetch.requests().length).toEqual(1)
      expect(fetch.requests()[0].url).toEqual('http://localhost:3000/user/4/average-sessions')
    })
    it('should return an error, when the fetch has failed', async () => {
      fetch.mockReject(new Error(failedData))
      expect(fetch('http://localhost:3000/user/4/average-sessions')).rejects.toThrow(failedData);
    })
  })
  
  describe('Activity Data Fetch: ', () => {  
    it('should return the mocked data, when the fetch has succeed', async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: succeedData }))
      //assert on the response
      const res = await SportSeeFetchApi.userActivity(4)
      expect(res?.data).toEqual(succeedData)

      //assert on the times called and arguments given to fetch
      expect(fetch.requests().length).toEqual(1)
      expect(fetch.requests()[0].url).toEqual('http://localhost:3000/user/4/activity')
    })
    it('should return an error, when the fetch has failed', async () => {
      fetch.mockReject(new Error(failedData))
      expect(fetch('http://localhost:3000/user/4/activity')).rejects.toThrow(failedData);
    })
  })

  describe('Performance Data Fetch: ', () => {  
    it('should return the mocked data, when the fetch has succeed', async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: succeedData }))
      //assert on the response
      const res = await SportSeeFetchApi.userPerformance(4)
      expect(res?.data).toEqual(succeedData)

      //assert on the times called and arguments given to fetch
      expect(fetch.requests().length).toEqual(1)
      expect(fetch.requests()[0].url).toEqual('http://localhost:3000/user/4/performance')
    })
    it('should return an error, when the fetch has failed', async () => {
      fetch.mockReject(new Error(failedData))
      expect(fetch('http://localhost:3000/user/4/performance')).rejects.toThrow(failedData);
    })
  })
})
