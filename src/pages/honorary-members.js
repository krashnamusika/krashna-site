import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const HonoraryMembersPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'honorary-members.title' })}>
    <Markdown options={{ html: true }}>{intl.formatMessage({ id: 'honorary-members.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(HonoraryMembersPage)
