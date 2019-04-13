import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const AboutPage = ({ t }) => (
  <PageTemplate title={t('about.title')}>
    <Markdown>{t('about.text')}</Markdown>
  </PageTemplate>
)

export default withTranslation()(AboutPage)
