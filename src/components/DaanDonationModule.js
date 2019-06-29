import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'

const DaanDonationModule = ({ intl, moreInformation, buttonDark }) => (
  <>
    <Markdown>{intl.formatMessage({ id: 'daan.text' })}</Markdown>
    <div className="text-center">
      <a
        href="https://tikkie.me/pay/2h24sevejv37eqpvtpis"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        10€
      </a>
      <a
        href="https://tikkie.me/pay/q81bqel52bcmfvmk95mt"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        25€
      </a>
      <a
        href="https://tikkie.me/pay/1qqdekirkiu1k4155q8o"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        50€
      </a>
      <a
        href="https://tikkie.me/pay/j45bfdklla94i7a7me7f"
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
