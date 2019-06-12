import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const ConcertmeesterVacature = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'concertmeester-vacature.title' })}>
    <Markdown>{intl.formatMessage({ id: 'concertmeester-vacature.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(ConcertmeesterVacature)
