import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const HireEnsemblePage = ({ t }) => (
  <PageTemplate title={t('hire-ensemble.title')}>
    <Markdown options={{ html: true }}>{t('hire-ensemble.text')}</Markdown>
  </PageTemplate>
)

export default withTranslation()(HireEnsemblePage)
