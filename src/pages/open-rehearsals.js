import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const OpenRehearsalsPage = ({ t }) => (
  <PageTemplate title={t('open-rehearsals.title')}>
    <Markdown>{t('open-rehearsals.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(OpenRehearsalsPage)
