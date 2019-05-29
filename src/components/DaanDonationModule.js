import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'

const DaanDonationModule = ({ intl, moreInformation, buttonDark }) => (
  <>
    <Markdown>{intl.formatMessage({ id: 'daan.text' })}</Markdown>
    <div className="text-center">
      <a
        href="https://tikkie.me/pay/mro8vkt4kkj0iqvepahi"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        10€
      </a>
      <a
        href="https://tikkie.me/pay/osiarflp14clfm7r68gn"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        25€
      </a>
      <a
        href="https://tikkie.me/pay/moroi33coeef6afhuvp2"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        50€
      </a>
      <a
        href="https://tikkie.me/pay/u4ie37sr286lo7jk5ccb"
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
