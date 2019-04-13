import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const CommitteesPage = ({ t }) => (
  <PageTemplate title={t('committees.title')}>
    <Markdown>{t('committees.text')}</Markdown>
  </PageTemplate>
)

export default withTranslation()(CommitteesPage)
