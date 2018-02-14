import React from 'react'
import CenteredButton from '../components/CenteredButton'
import PageTemplate from '../templates/pageTemplate'

const NotFoundPage = () => (
  <PageTemplate title="404: Not Found">
    <p className="text-center lead">
      Nothing here... except for a{' '}
      <a href="https://youtu.be/P9G6lwQ72Io" target="blank">
        404 Hz sine wave
      </a>.
    </p>
    <CenteredButton url="/">
      <span className="fa fa-home mr-2"/>
      Return home
    </CenteredButton>
  </PageTemplate>
)

export default NotFoundPage
