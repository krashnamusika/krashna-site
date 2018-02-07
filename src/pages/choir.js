import React from 'react'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'

const ChoirPage = ({ t }) => (
  <PageTemplate title={t('title')}>
    {t('text')}
    <CenteredButton url="/join">{t('join-button')}</CenteredButton>
  </PageTemplate>
)

export default translate('Choir')(ChoirPage)
