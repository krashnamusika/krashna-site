import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const JoinPage = ({ t }) => (
  <PageTemplate title={t('join.title')}>
    <Markdown>{t('join.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(JoinPage)
