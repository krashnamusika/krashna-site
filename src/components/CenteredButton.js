import Link from 'gatsby-link'
import React from 'react'

const CenteredButton = ({ url, external, children }) => {
  return (
    <div className="text-center pt-3 pb-3">
      {external ? (
        <a className={`btn btn-secondary btn-lg`} href={url} target="blank">
          {children}
        </a>
      ) : (
        <Link className={`btn btn-primary btn-lg`} to={url}>
          {children}
        </Link>
      )}
    </div>
  )
}

CenteredButton.defaultProps = {
  external: false,
}

export default CenteredButton
