import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const Addendum50Page = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'addendum-50.title' })}>
    <Markdown>{intl.formatMessage({ id: 'addendum-50.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(Addendum50Page)
