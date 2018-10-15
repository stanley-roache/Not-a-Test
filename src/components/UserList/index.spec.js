import React from 'react'
import { shallow } from 'enzyme'

import toJson from 'enzyme-to-json'

import UserList from '.'

// I can't figure out how to easily update a shapshot inside codesandbox so I'm going to leaver this here
// I am at the end of two hours and haven't written any tests, if I did this again I would scale back on the feature writing
//  and write a test for each new feature as I went
describe('UserList', () => {
  it.skip('renders message and no list when no users have registered yet', () => {
    expect(toJson(shallow(<UserList />))).toMatchSnapshot()
  })
})
