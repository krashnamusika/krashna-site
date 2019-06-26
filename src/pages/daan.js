import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import DaanDonationModule from '../components/DaanDonationModule'
import daan from '../components/IndexPage/daan-admiraal.jpg'

const DaanMonumentPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'daan.title' })}>
    <DaanDonationModule moreInformation={false} buttonDark={true} />
    <div className="mt-3 text-center">
      <Markdown>{intl.formatMessage({ id: 'daan.email-text' })}</Markdown>
    </div>
    <div className="text-center mt-5 mb-5">
      <img
        src={daan}
        alt="Daan Admiraal"
        style={{ width: '40%', margin: 'auto' }}
      />
    </div>
  </PageTemplate>
)

export default injectIntl(DaanMonumentPage)
