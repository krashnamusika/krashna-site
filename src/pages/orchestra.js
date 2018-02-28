import React from 'react'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'

const OrchestraPage = ({ t }) => (
  <PageTemplate title={t('orchestra.title')}>
    {t('orchestra.text')}
    <CenteredButton url="/join">{t('orchestra.join-button')}</CenteredButton>
  </PageTemplate>
)

export default translate('translations')(OrchestraPage)
