import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const HireOrchestraChoirPage = ({ t }) => (
  <PageTemplate title={t('hire-orchestra-choir.title')}>
    <Markdown>{t('hire-orchestra-choir.text')}</Markdown>
  </PageTemplate>
)

export default withTranslation()(HireOrchestraChoirPage)
