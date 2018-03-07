import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const RecommendationPage = ({ t }) => (
  <PageTemplate title={t('recommendation.title')}>
    <Markdown>{t('recommendation.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(RecommendationPage)
