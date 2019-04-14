import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const DonatePage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'donate.title' })}>
    <Markdown>{intl.formatMessage({ id: 'donate.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(DonatePage)
