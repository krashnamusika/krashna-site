import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import TwoPartLayout from './TwoPartLayout'

const MonumentDonationSection = ({ intl }) => {
  return (
    <div className="bg-dark text-white">
      <div className="container pt-5 pb-5 text-center">
        <TwoPartLayout
          title={intl.formatMessage({ id: 'index.monument-donation.title' })}
        >
          <Link className="btn btn-light" to="/daan-monument">
            {intl.formatMessage({ id: 'index.monument-donation.more' })}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </TwoPartLayout>
      </div>
    </div>
  )
}

export default injectIntl(MonumentDonationSection)
