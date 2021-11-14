import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>NotFound</h1>
      <div>404 error!</div>
      <Link to="/">Back</Link>
    </>
  )
}

export default NotFound
