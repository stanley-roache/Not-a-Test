import React from 'react'

// Displays greeting including latest users name, or a generic welcome if no users have registered
export default function({ latestUser }) {
  return latestUser ? (
    <p>Welcome, {latestUser}. Add a friends name to register them.</p>
  ) : (
    <p>Welcome, add your name below to register.</p>
  )
}
