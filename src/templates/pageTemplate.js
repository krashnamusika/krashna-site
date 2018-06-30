import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'

export default function PageTemplate({ title, children, useCustomStructure }) {
  const pageTitle = `${title} - Krashna Musika`

  return (
    <div className={useCustomStructure ? "" : "container text-page-container pb-2"}>
      <SEO
        title={pageTitle}
        description={pageTitle}
        url={window.location.href}
      />
      <Helmet title={pageTitle} />
      {useCustomStructure ?
        undefined :
        <h1 className="border-bottom text-center mb-4">{title}</h1>
      }
      {children}
    </div>
  )
}

PageTemplate.defaultProps = {
  useCustomStructure: false
}
