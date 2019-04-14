import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const ContactPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'contact.title' })}>
    <Markdown>{intl.formatMessage({ id: 'contact.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(ContactPage)
