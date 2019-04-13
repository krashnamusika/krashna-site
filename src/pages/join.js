import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const JoinPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'join.title' })}>
    <Markdown>{intl.formatMessage({ id: 'join.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(JoinPage)
