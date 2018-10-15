import React from 'react'
import { isNonEmptyArray } from 'ramda-adjunct'
import styled from 'styled-components'

import SortToggle from '../../containers/SortToggle'

// starting the styling here, since the list to me looks the most off
const StyledUl = styled.ul`
  list-style: none;
  text-align: left;
`

// display: inline;
const StyledLi = styled.li`
  padding-bottom: 3%;
`

// I want the sort button to sit to the right of the list
const ListContainer = styled.div`
  display: inline;
`

// this functional component will display a list of users or if there are none will print a no users message
export default function UserList({ users, isSorted, removeUser }) {
  return isNonEmptyArray(users) ? (
    <ListContainer>
      <SortToggle />
      <StyledUl>
        {users.map((user, i) => (
          <StyledLi key={i}>
            <button onClick={() => removeUser(i)}>X</button>
            <span> {user}</span>
          </StyledLi>
        ))}
      </StyledUl>
    </ListContainer>
  ) : (
    <p> No users registered yet </p>
  )
}
