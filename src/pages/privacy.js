import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const PrivacyPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'privacy.title' })}>
    <Markdown>{intl.formatMessage({ id: 'privacy.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(PrivacyPage)
