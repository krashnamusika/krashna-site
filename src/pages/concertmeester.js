import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const Concertmeester = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'concertmeester.title' })}>
    <Markdown>{intl.formatMessage({ id: 'concertmeester.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(Concertmeester)
