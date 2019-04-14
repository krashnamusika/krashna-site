import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const PartnersPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'partners.title' })}>
    <Markdown>{intl.formatMessage({ id: 'partners.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(PartnersPage)
