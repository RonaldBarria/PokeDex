import React from 'react'

export const MsgError = ({msg}) => {
  return (
    <div className='alert alert-bad text-center'><h5>{msg}</h5></div>
  )
}
