import Link from 'gatsby-link'
import React from 'react'
import { translate } from 'react-i18next'
import TwoPartLayout from './TwoPartLayout'

const HireEnsembleSection = ({ t }) => {
  return (
    <div>
      <div className="container pt-5 pb-5 text-center">
        <TwoPartLayout title={t('index.hire-ensemble.question')}>
          <Link className="btn btn-danger" to="/hire-ensemble">
            {t('index.hire-ensemble.learn-more')}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </TwoPartLayout>
      </div>
    </div>
  )
}

export default translate('translations')(HireEnsembleSection)
