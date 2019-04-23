import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'

const DaanDonationModule = ({ intl, moreInformation, buttonDark }) => (
  <>
    <Markdown>{intl.formatMessage({ id: 'daan.text' })}</Markdown>
    <div className="text-center">
      <a
        href="https://krashna.nl"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        25€
      </a>
      <a
        href="https://krashna.nl"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        50€
      </a>
      <a
        href="https://krashna.nl"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'}`}
      >
        100€
      </a>
    </div>
    {moreInformation ? (
      <small className="text-center">
        <Link
          to="/daan"
          className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mt-2`}
        >
          {intl.formatMessage({ id: 'index.monument-donation.more' })}
          <span className="fa fa-caret-right ml-2" />
        </Link>
      </small>
    ) : (
      undefined
    )}
  </>
)

export default injectIntl(DaanDonationModule)
