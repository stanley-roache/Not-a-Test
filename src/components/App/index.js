import { mapIndexed } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'

// GENERAL COMMENTS ON METHOD
// I like to start writing code by importing/needing the component before it is written, sot the import comes first
// In general I like to split things into components even when it takes a little more code, I think it makes the structure more readable
// Where possible/reasonable I'm using the same pattern and style that the existing code is written in for consistency
// I find logic and getting things working a bit easier than styling so I'm starting with that but hope to do leave time for this

// Spent a chunk of time at the end trying to get the commit to work properly through sandbox

// I'm starting with a UserList component that will display the currently registered users,
import UserList from '../../containers/UserList'

// For consistency I would not use this pattern, rather than pass the latestUser through props to
//  the unconnected WelcomeComponent I would make it its own container.
// I wanted to do this for bvariety and also to make use of the fact that App already has access to latestUser
import WelcomeSection from '../../components/WelcomeSection'

export default function App({ handleOnSubmit, latestUser, users }) {
  return (
    <div className="App">
      <WelcomeSection latestUser={latestUser} />
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      <UserList />
    </div>
  )
}
