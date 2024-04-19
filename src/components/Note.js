import React from 'react'
import { useSelector } from 'react-redux'

function Note() {
  // here is the method to suscribe the store by any component
   // here state is store useSelector comes from reaxt-redux

   const message = useSelector(state => state.messageReducer.message)

  return (
    <div>Notes {message}</div>
  )
}

export default Note