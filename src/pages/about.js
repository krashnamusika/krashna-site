import React from 'react'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'

const AboutPage = ({ t }) => (
  <PageTemplate title={t('about.title')}>
    <Markdown>{t('about.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(AboutPage)
