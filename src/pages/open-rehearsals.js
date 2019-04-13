import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const OpenRehearsalsPage = ({ t }) => (
  <PageTemplate title={t('open-rehearsals.page.title')}>
    <Markdown>{t('open-rehearsals.page.text')}</Markdown>
  </PageTemplate>
)

export default withTranslation()(OpenRehearsalsPage)
