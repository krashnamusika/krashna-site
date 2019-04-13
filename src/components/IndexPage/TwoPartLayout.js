import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

const TowPartLayout = ({ title, children }) => {
  return (
    <div className="row">
      <h2 className="col-md-8 text-md-left align-self-center">{title}</h2>
      <div className="col-md-4 text-md-right align-self-center">{children}</div>
    </div>
  )
}

export default injectIntl(TowPartLayout)
