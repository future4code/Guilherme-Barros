import React from 'react'

export const User = (props) => {
  return (
    <div>
      <h1>{props?.name}</h1>
      <img src={props?.image}/>
    </div>
  )
}
