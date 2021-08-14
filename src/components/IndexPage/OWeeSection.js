import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import TwoPartLayout from './TwoPartLayout'

const OWeeSection = ({ intl }) => {
  return (
    <div>
      <div className="container pt-5 pb-5 text-center">
        <TwoPartLayout
          title={intl.formatMessage({ id: 'index.owee.title' })}
        >
          <Link className="btn btn-danger" to="/owee">
            {intl.formatMessage({ id: 'index.owee.learn-more' })}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </TwoPartLayout>
      </div>
    </div>
  )
}

export default injectIntl(OWeeSection)
