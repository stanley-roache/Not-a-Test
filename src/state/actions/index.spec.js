import { REMOVE_USER, USER_REGISTERED, SET_SORTING } from '../constants'
import { userRegistered, setSortingAction, removeUserAction } from '.'

// This is how I would test an action creator
describe('action creators', () => {
  describe('userRegistered', () => {
    it('creates appropriate action given user name', () => {
      const name = 'test-name'

      const expected = {
        type: USER_REGISTERED,
        payload: {
          user: name
        }
      }

      const actual = userRegistered(name)

      expect(actual).toEqual(expected)
    })
  })
})
