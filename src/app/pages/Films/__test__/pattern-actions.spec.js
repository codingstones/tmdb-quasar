import { rejectedPromise, resolvedPromise } from '../../../../../test/helpers'
import { queryAction } from '../pattern-actions'

describe('REQUEST/SUCCESS/ERROR actions', () => {

  let action
  let commitSpy
  beforeEach(() => {
    commitSpy = jest.fn()
  })
  const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
  const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
  const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

  describe('Retrieving results action', () => {

    it('finishes with success', async () => {
      const RESULT = 'ANY RESULT'
      const retrieveData = resolvedPromise(RESULT)

      action = queryAction(retrieveData, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR)
      await action.run({ commit: commitSpy })

      expect(commitSpy).toHaveBeenCalledWith(FETCH_DATA_REQUEST)
      expect(commitSpy).toHaveBeenCalledWith(FETCH_DATA_SUCCESS, RESULT)
    })

    it('finishes with error', async () => {
      const backendError = Error('Backend Error')
      const retrieveData = rejectedPromise(backendError)
      action = queryAction(retrieveData, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR)

      try {
        await action.run({ commit: commitSpy })
      } catch (error) {
        expect(commitSpy).toHaveBeenCalledWith(FETCH_DATA_REQUEST)
        expect(commitSpy).toHaveBeenCalledWith(FETCH_DATA_ERROR, backendError)
        expect(error).toBe(backendError)
      }
    })
  })
})
