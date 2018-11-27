import Link from 'gatsby-link'
import React from 'react'
import { translate } from 'react-i18next'
import TwoPartLayout from './TwoPartLayout'

const ConductorPositionSection = ({ t }) => {
  return (
    <div className="bg-white">
      <div className="container pt-5 pb-5 text-center">
        <TwoPartLayout title={t('index.conductor-position.title')}>
          <Link className="btn btn-danger" to="/vacature">
            {t('index.conductor-position.learn-more')}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </TwoPartLayout>
      </div>
    </div>
  )
}

export default translate('translations')(ConductorPositionSection)
