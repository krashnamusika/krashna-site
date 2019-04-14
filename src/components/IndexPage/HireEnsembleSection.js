import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import TwoPartLayout from './TwoPartLayout'

const HireEnsembleSection = ({ intl }) => {
  return (
    <div>
      <div className="container pt-5 pb-5 text-center">
        <TwoPartLayout
          title={intl.formatMessage({ id: 'index.hire-ensemble.question' })}
        >
          <Link className="btn btn-danger" to="/hire-ensemble">
            {intl.formatMessage({ id: 'index.hire-ensemble.learn-more' })}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </TwoPartLayout>
      </div>
    </div>
  )
}

export default injectIntl(HireEnsembleSection)
