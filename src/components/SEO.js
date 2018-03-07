import React from 'react'
import {Helmet} from "react-helmet";

const SEO = ({ title, description, url }) => (
  <Helmet>
    {/* Generic meta tags */}
    <meta name="description" content={description}/>
    <meta name="image" content={Favicon}/>

    {/* OpenGraph tags */}
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="https://www.krashna.nl/krashna-logo.jpg" />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="https://www.krashna.nl/krashna-logo.jpg" />
  </Helmet>
)

export default SEO
