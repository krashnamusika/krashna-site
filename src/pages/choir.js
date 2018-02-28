import React from 'react'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'

const ChoirPage = ({ t }) => (
  <PageTemplate title={t('choir.title')}>
    {t('choir.text')}
    <CenteredButton url="/join">{t('choir.join-button')}</CenteredButton>
  </PageTemplate>
)

export default translate('translations')(ChoirPage)
