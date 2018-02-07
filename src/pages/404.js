import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="container text-page-container">
    <h1>404: Not Found</h1>
    <p>
      Nothing here... except for a{' '}
      <a href="https://youtu.be/P9G6lwQ72Io" target="blank">
        404 Hz sine wave
      </a>.
    </p>
    <Link className="btn btn-primary" to="/">
      <span className="fa fa-home mr-2" />
      Return home
    </Link>
  </div>
)

export default NotFoundPage
