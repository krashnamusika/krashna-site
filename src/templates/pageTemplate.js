import React from 'react'
import Helmet from 'react-helmet'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SEO from '../components/SEO'
import './index.css'

export default function PageTemplate({ title, children, useCustomStructure }) {
  const pageTitle = title ? `${title} - Krashna Musika` : 'Krashna Musika'

  if (useCustomStructure) {
    return (
      <div>
        <SEO
          title={pageTitle}
          description={pageTitle}
          url={window.location.href}
        />
        <Helmet title={pageTitle} />
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
  return (
    <div className="d-flex flex-column h-100">
      <SEO
        title={pageTitle}
        description={pageTitle}
        url={window.location.href}
      />
      <Helmet title={pageTitle} />
      <Header />
      <div className="d-flex flex-column flex-grow-1">
        <div className="container text-page-container pb-2">
          <div
            style={{
              paddingTop: '60px',
              flex: 'auto',
            }}
          >
            <h1 className="border-bottom text-center mb-4">{title}</h1>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

PageTemplate.defaultProps = {
  useCustomStructure: false,
}
