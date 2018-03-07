import React from 'react'
import Helmet from 'react-helmet'
import SEO from "../components/SEO";

export default function PageTemplate({ title, children }) {
  const pageTitle = `${title} - Krashna Musika`;

  return (
    <div className="container text-page-container pb-2">
      <SEO title={pageTitle} description={pageTitle} url={window.location.href}/>
      <Helmet title={pageTitle} />
      <h1 className="border-bottom text-center mb-4">{title}</h1>
      {children}
    </div>
  )
}
