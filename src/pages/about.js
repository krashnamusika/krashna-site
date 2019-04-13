import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const AboutPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'about.title' })}>
    <Markdown>{intl.formatMessage({ id: 'about.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(AboutPage)
