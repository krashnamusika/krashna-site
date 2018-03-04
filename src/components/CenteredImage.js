import React from 'react'
import Link from 'gatsby-link'

const CenteredImage = ({ url, title }) => {
  return (
    <div className="col-md-8 col-10 mx-auto p-2 text-center mt-3">
      <img src={url} className="img-fluid" alt={title} />
    </div>
  )
}

export default CenteredImage
