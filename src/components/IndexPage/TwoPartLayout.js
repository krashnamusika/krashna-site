import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

const TowPartLayout = ({ title, titleLeft, children }) => {
  return (
    <div className="row">
      <h2
        className={`align-self-center col-md-8 ${
          titleLeft ? 'text-md-left order-1' : 'text-md-right order-2'
        }`}
      >
        {title}
      </h2>
      <div
        className={`align-self-center col-md-4 ${
          titleLeft ? 'text-md-right order-2' : 'text-md-left order-1'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

TowPartLayout.defaultProps = {
  titleLeft: true,
}

export default injectIntl(TowPartLayout)
