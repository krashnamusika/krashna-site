import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const DonatePage = ({ t }) => (
  <PageTemplate title={t('donate.title')}>
    <Markdown>{t('donate.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(DonatePage)
