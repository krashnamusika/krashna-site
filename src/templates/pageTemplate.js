import React from 'react'
import Helmet from 'react-helmet'

export default function PageTemplate({ title, children }) {
  return (
    <div className="container text-page-container pb-2">
      <Helmet title={`${title} - Krashna Musika`} />
      <h1 className="border-bottom text-center mb-4">{title}</h1>
      {children}
    </div>
  )
}
