import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const Vacature = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'vacature.title' })}>
    <Markdown>{intl.formatMessage({ id: 'vacature.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(Vacature)
