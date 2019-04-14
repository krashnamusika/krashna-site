import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const RentInstrumentPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'rent-instrument.title' })}>
    <Markdown>{intl.formatMessage({ id: 'rent-instrument.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(RentInstrumentPage)
