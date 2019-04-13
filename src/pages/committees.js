import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const CommitteesPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'committees.title' })}>
    <Markdown>{intl.formatMessage({ id: 'committees.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(CommitteesPage)
