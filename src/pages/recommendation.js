import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const RecommendationPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'recommendation.title' })}>
    <Markdown>{intl.formatMessage({ id: 'recommendation.text' })}</Markdown>
  </PageTemplate>
)

export default injectIntl(RecommendationPage)
