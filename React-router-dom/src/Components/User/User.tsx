import React from 'react'
import { useParams } from 'react-router'

export const User = () => {

    const{Id} = useParams();
  return (
    <div>User:{Id}</div>
  )
}
