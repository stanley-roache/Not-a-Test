import { comparator, head, lt, pipe, reverse, sort } from 'ramda'

export function getUsers({ users }) {
  return users
}

// a new accessor function to get the boolean determining whether to sort
export function getIsSorted({ isSorted }) {
  return isSorted
}

// I like the pattern below so I'm going to use it to get the sorted users
// I think rambdas sort might default to alphabetical, we'll see

// I got stuck on this for ages, frsustrating as it would have been 2 seconds with plain javascript but I wanted
//  to get it working rmada style, eventually I found comparator and lt here:
// https://stackoverflow.com/questions/52581365/how-do-you-sort-an-array-of-words-with-ramda
// Now I know this
export const getAlphabeticallySortedUsers = pipe(
  getUsers,
  sort(comparator(lt))
)

export const getLatestUser = pipe(
  getUsers,
  reverse,
  head
)
