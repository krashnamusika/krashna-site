import React from 'react'
import { translate } from 'react-i18next'

const TowPartLayout = ({ title, children }) => {
  return (
    <div className="row">
      <h2 className="col-md-8 text-md-left align-self-center">{title}</h2>
      <div className="col-md-4 text-md-right align-self-center">{children}</div>
    </div>
  )
}

export default translate('translations')(TowPartLayout)
