import React from 'react'
import { useSelector } from 'react-redux'

function ListNotes() {
    const notes = useSelector(state => state.notesReducer )
  return (
    <div>
      
    </div>
  )
}

export default ListNotes
