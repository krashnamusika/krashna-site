import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, url }) => (
  <Helmet>
    {/* Generic meta tags */}
    <meta name="description" content={description} />
    <meta name="image" content="https://www.krashna.nl/krashna-logo.jpg" />

    {/* OpenGraph tags */}
    <meta property="og:url" content={`https://www.krashna.nl${url}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
)

export default SEO
