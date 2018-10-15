import { REMOVE_USER, USER_REGISTERED, SET_SORTING } from '../constants'

export function userRegistered(user) {
  return {
    type: USER_REGISTERED,
    payload: {
      user
    }
  }
}

// action to set whether alphabetical sorting is used
export function setSortingAction(isSorted) {
  return {
    type: SET_SORTING,
    payload: {
      isSorted
    }
  }
}

// action to remove user
export function removeUserAction(userNumber) {
  return {
    type: REMOVE_USER,
    payload: {
      userNumber
    }
  }
}
