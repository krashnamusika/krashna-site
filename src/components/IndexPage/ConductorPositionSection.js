import Link from 'gatsby-link'
import React from 'react'
import { translate } from 'react-i18next'

const ConductorPositionSection = ({ t }) => {
  return (
    <div className="bg-white">
      <div className="container pt-5 pb-5 text-center">
        <h2>{t('index.conductor-position.title')}</h2>
        <Link className="btn btn-danger" to="/vacature">
          {t('index.conductor-position.learn-more')}
          <span className="fa fa-caret-right ml-2" />
        </Link>
      </div>
    </div>
  )
}

export default translate('translations')(ConductorPositionSection)
