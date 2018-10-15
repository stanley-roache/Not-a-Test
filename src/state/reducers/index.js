import { isBoolean, isInteger, isNonEmptyString } from 'ramda-adjunct'

import { equals, not } from 'ramda'

import {
  initialState,
  SET_SORTING,
  USER_REGISTERED,
  REMOVE_USER
} from '../constants'

export default function rootReducer(
  state = initialState,
  { type, payload = {} }
) {
  switch (type) {
    case USER_REGISTERED:
      return payload.user && isNonEmptyString(payload.user)
        ? {
            ...state,
            users: [...state.users, payload.user]
          }
        : state
    case REMOVE_USER:
      // A check that the payload is in the right form
      return isInteger(payload.userNumber) && payload.userNumber >= 0
        ? {
            ...state,
            //  I know there will be a cleaner, more functional way to do this with ramda but I am short of time
            //  and want to do some styling, so I am resorting to quick raw javascript here
            //  I am filtering by index because this is a pseudo for a unique id, it still works if multiple
            //  people with same name register
            // I didn't know how to refer to the array index with ramda filter
            users: state.users.filter((el, i) =>
              not(equals(i, payload.userNumber))
            )
          }
        : state
    // This allows setting of a boolean that determines sorting, I'm using the same check pattern with ramda adjunct
    //  to amke sure the actions has the right form
    case SET_SORTING:
      return isBoolean(payload.isSorted)
        ? {
            ...state,
            isSorted: payload.isSorted
          }
        : state
    default:
      return state
  }
  return state
}
