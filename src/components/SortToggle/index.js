import React from 'react'
import { not } from 'ramda'

// a component for the sort button
export default function SortToggle({ isSorted, setSorting }) {
  return (
    <button onClick={() => setSorting(not(isSorted))}>
      {isSorted ? <p> unsort list </p> : <p> sort list </p>}
    </button>
  )
}
