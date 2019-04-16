import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import TwoPartLayout from './TwoPartLayout'
import sponsorkliksLogo from './sponsorkliks.png'

const SponsorKliksSection = ({ intl }) => {
  return (
    <div className="">
      <div className="container pt-5 pb-5 text-center">
        <TwoPartLayout
          title={intl.formatMessage({ id: 'index.sponsor-kliks.question' })}
          titleLeft={false}
        >
          <a
            href="https://www.sponsorkliks.com/products/shops.php?club=9493"
            target="_blank"
            rel="noopener noreferrer"
            className="float-md-left"
          >
            <img
              src={sponsorkliksLogo}
              width={130}
              alt="SponsorKliks, gratis sponsoren!"
              title="SponsorKliks, sponsor jouw sponsordoel gratis!"
              border="0"
            />
          </a>
        </TwoPartLayout>
      </div>
    </div>
  )
}

export default injectIntl(SponsorKliksSection)
