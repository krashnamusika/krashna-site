import React from 'react'
import Link from 'gatsby-link'

const CenteredButton = ({ url, external, children }) => {
  return (
    <center className="pt-3 pb-3">
      {external ? (
        <a className={`btn btn-secondary btn-lg`} href={url} target="blank">
          {children}
        </a>
      ) : (
        <Link className={`btn btn-primary btn-lg`} to={url}>
          {children}
        </Link>
      )}
    </center>
  )
}

CenteredButton.defaultProps = {
  external: false,
}

export default CenteredButton
